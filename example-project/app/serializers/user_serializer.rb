class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :password
end
