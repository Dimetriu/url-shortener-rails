class Users::VerifyEmail
  class << self
    def call(user_id:)
      user = User.find(user_id)
      return user.confirmed_at if user.confirmed_at?

      user.update_attributes(
        confirmed_at: DateTime.current
      )
    end
  end
end
