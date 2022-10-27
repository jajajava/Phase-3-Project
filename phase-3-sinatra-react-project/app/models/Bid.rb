class Bid < ActiveRecord::Migration[6.1]
    belongs_to :user
    belongs_to :art
    
end