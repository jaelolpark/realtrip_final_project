class UserSerializer < ActiveModel::Serializer
  has_many :reviews
  # has_many :bookings
  has_many :tours

  attributes :id, :first_name, :last_name, :full_name, :username, :to_be_guide, :introduce, :avatar, :my_tours

  def my_tours
    self.object.my_tours.map{|t| TourSerializer.new(t) }
  end
  
  def full_name
    self.object.full_name
  end
  
end
