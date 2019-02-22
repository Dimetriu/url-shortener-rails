class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname,       null: false, default: ''
      t.string :lastname,        null: false, default: ''
      t.string :email,           null: false, default: ''
      t.string :password_digest, null: false, default: ''
      t.datetime :confirmed_at

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
