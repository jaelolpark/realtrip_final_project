class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  
  has_many :reviews
  has_many :bookings
  has_many :tours

  def guide_tours
    Tour.all.select{|t| t.user == self }
  end
end