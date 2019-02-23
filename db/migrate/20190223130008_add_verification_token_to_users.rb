class AddVerificationTokenToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :verification_token, :uuid, default: 'uuid_generate_v4()'
  end
end
