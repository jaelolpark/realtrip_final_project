class UserSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :bookings
  has_many :tours

  attributes :id, :first_name, :last_name, :username, :to_be_guide, :introduce, :avatar
  
end
