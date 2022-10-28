class CreateArts < ActiveRecord::Migration[6.1]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :medium
      t.string :description
      t.string :image
      t.string :size
      t.integer :price
      t.string :timestamp
      t.text :tags

      t.integer :user_id
    end
  end
end