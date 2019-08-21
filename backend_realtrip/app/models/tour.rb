class Tour < ApplicationRecord
  belongs_to :guide, class_name: "User"
  
  has_many :reviews
  has_many :bookings
  has_many :users, through: :bookings

  # mount_uploader :image, ImageUploader

  def visitors
    self.bookings.map(&:user)
  end
end
