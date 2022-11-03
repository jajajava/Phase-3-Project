class User < ApplicationRecord
    has_many :arts
    validates :username, uniqueness: true
    validates :email, uniqueness: true
    
end


