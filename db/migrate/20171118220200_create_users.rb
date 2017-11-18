class CreateUsers < ActiveRecord::Migration[5.1]
  #email will serve as primary username
  #name is 'friendly name', not username
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :bio
      t.string :profile_image_url
      t.timestamps
    end
    #optimize for email, session_token lookup
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
