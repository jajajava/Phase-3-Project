class CreateArts < ActiveRecord::Migration[6.1]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :medium
      t.integer :year_created
      t.string :size
      t.text :description
      t.integer :price
      t.string :art_url
      t.string :tags
      t.boolean :negotiable

      t.integer :user_id

    end
  end
end
