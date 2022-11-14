class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :size,:open,:closed

  has_many :reviews

end
