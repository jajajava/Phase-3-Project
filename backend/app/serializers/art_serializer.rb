class ArtSerializer < ActiveModel::Serializer
  attributes :id, :title, :medium, :description, :image, :tags, :price
  belongs_to :user
end
