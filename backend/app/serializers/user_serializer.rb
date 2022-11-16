class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :name, :commissions
  has_many :arts
end
