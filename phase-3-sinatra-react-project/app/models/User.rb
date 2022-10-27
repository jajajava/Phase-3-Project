class User < ActiveRecord::Migration[6.1]
    has_many :bids
    has_many :arts, through: :bids

end