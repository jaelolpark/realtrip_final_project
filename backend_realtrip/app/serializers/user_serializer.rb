class UserSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :bookings
  has_many :tours

  attributes :id, :first_name, :last_name, :email, :password, :phone_number, :to_be_guide, :introduce, :avatar
end
