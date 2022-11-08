class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :name
  has_many :arts
end
