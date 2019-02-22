require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { create(:user) }

  it { should have_secure_password }

  context "when valid email" do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { expect(user).to allow_value("valid@email.com").for(:email) }
  end

  context "when invalid email" do
    it do
      expect(user)
      .to_not allow_value("invalid@email")
      .for(:email)
      .with_message("Invalid email")
    end
  end

  context "when valid password" do
    it { should validate_presence_of(:password) }
    it { should validate_presence_of(:password_confirmation) }
    it { should validate_confirmation_of(:password) }

    it do
      should validate_length_of(:password)
      .is_at_least(6)
      .is_at_most(20)
    end
  end
end
