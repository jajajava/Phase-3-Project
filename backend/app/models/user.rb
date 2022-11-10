class User < ApplicationRecord
    has_secure_password
    has_many :arts, dependent: :destroy
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    
end


