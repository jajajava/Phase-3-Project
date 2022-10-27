class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.string :bid_name
      t.string :bid_email
      t.integer :bid_amount
      t.text :bid_comments
    end
  end
end
