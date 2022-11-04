class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :gym_id, :review, :starts
end
