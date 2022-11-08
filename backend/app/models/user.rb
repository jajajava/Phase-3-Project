class User < ApplicationRecord
    has_many :arts, dependent: :destroy
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    
end


