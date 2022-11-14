class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :gym_id, :review, :stars
  has_many :gym
end
