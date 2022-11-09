class GymReviewsSerializer < ActiveModel::Serializer
  attributes :id,:name ,:location, :image, :size
  has_many :reviews
end
