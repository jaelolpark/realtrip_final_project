class BookingSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :tour

  attributes :user_id, :tour_id
end
