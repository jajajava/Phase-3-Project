class User < ApplicationRecord
    has_many :arts, dependent: :destroy
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    
end


