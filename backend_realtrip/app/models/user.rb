class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  
  has_many :reviews
  has_many :bookings
  has_many :tours, through: :bookings

  def my_tours
    Tour.where("guide_id = ?", self.id)
  end

  # mount_uploader :image, ImageUploader

  def guide_tours
    Tour.all.select{|t| t.user == self }
  end

  def full_name
    [self.first_name, ' ', self.last_name].join
  end

end