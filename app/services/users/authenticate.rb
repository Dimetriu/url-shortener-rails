class Users::Authenticate
  attr_reader :token, :error

  def initialize(email, password)
    @email    = email
    @password = password
    @error  ||= {}
  end

  def call
    produce_token
  end

  private

  attr_reader :email, :password
  attr_writer :error

  def produce_token
    return (error[:credentials] = "Invalid credentials") unless user

    @token = JsonWebToken.encode(user_id: user.id)
  end

  def user
    @user ||= User.find_by(email: email)&.authenticate(password)
  end
end
