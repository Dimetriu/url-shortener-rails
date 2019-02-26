class Users::Authenticate
  def initialize(email:, password:)
    @email, @password = email, password
  end

  def call
    token
  end

  # Shorthand from Users::Authenticate.new(...).call
  def self.call(email:, password:)
    self.new(email: email, password: password).call
  end

  private

  attr_reader :email, :password

  def token
    @token = JsonWebToken.encode(user_id: user.id) if user
  end

  def user
    @user ||= User.find_by(email: email)&.authenticate(password)
  end
end
