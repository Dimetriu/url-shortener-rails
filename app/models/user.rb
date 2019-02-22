class User < ApplicationRecord
  has_secure_password

  validates :email,
    presence: true,
    email: true,
    uniqueness: true

  validates :password,
    presence: true,
    confirmation: true,
    length: { in: 6..20 }

  validates :password_confirmation, presence: true

  def confirmed?
    self[:confirmed_at].nil?
  end

  def confirm!
    return self[:confirmed_at] if self[:confirmed_at]
    update_attributes(confirmed_at: DateTime.current)
  end
end
