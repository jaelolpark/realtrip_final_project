class TourSerializer < ActiveModel::Serializer

  has_many :reviews
  has_many :users, through: :bookings 
  
  attributes :id, :guide, :title, :details, :second_language, :number_of_ppl, :price, :location, :include, :exclude, :image_url, :image, :start_date, :end_date

  def guide
    {
      id: self.object.guide.id,
      first_name: self.object.guide.first_name,
      last_name: self.object.guide.last_name,
      full_name: self.object.guide.full_name,
      avatar: self.object.guide.avatar,
      introduce: self.object.guide.introduce,
      second_language: self.object.guide.second_language
    }
  end
end
