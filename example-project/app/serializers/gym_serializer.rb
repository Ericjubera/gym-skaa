class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :size
end
