class CreateArts < ActiveRecord::Migration[7.0]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :medium
      t.string :description
      t.string :image
      t.integer :price
      t.integer :user_id

      t.timestamps
    end
  end
end
