class User < ApplicationRecord
  has_secure_password

  validates :email,
    presence: true,
    email: true,
    uniqueness: true

  validates :password_digest, presence: true
  # validates :password,
  #   presence: true,
  #   length: { in: 6..20 }

  # validates :password_confirmation, presence: true

  # def confirm!
  #   return confirmed_at if confirmed_at?
  #   update_attributes(confirmed_at: DateTime.current)
  # end
end
