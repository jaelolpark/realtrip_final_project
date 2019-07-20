class Tour < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :bookings

  def visitors
    self.bookings.map(&:user)
  end
end
