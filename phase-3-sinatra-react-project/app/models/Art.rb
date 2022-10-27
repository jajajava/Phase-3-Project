class Art < ActiveRecord::Migration[6.1]
    has_many :bids
    has_many :users, through: :bids

end