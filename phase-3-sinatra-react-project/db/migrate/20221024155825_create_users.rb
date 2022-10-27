class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password
      t.string :email
      t.boolean :isArtist
      t.string :profile_picture
      t.text :artist_bio
    end
  end
end
