class Users::Build
  def call(**options)
    token = SecureRandom.uuid

    User.create!(
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      verification_token: token
    )
  end

  def initialize(**options)
    @firstname               = options[:firstname]
    @lastname                = options[:lastname]
    @email                   = options[:email]
    @password                = options[:password]
    @password_confirmation   = options[:password_confirmation]
    @verification_token    ||= ''
  end

  private
    attr_reader :firstname,
                :lastname,
                :email,
                :password,
                :password_confirmation,
                :verification_token
end
