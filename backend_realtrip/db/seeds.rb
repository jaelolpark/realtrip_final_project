# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Booking.destroy_all
Tour.destroy_all
Review.destroy_all

g1 = User.create(first_name: 'jae', last_name: 'park', username: 'jae', password: '123', phone_number: '1231231234', to_be_guide: 'true', introduce: 'I am the best guide')
v1 = User.create(first_name: 'evan', last_name: 'kim', username: 'evan', password: '123', phone_number: '3213213214', to_be_guide: 'false')

t1 = Tour.create(title: 'Taking Snapshot on the Empire state building', detail: "The Empire State Building, which many architects call the best, is the world's tallest building for over 40 years. There is an amazing behind-the-clock history that the design has been completed in as much as two weeks. There are buildings all over the world now, but the Empire State Building remains the most unique and cool Modernist Art Deco building. The night view is really awesome because the floodlights illuminate the top of the building every night. Yes, you can get a glimpse of New York City from the observation deck here.", language: 'Korean', number_of_ppl: '4', price: '30', location: '20 W 34th St, New York, NY 10001', include: 'Snapshot', exclude: 'lunch', user: g1, start_time: Time.now, end_time: Time.now)

Booking.create(user: v1, tour: t1)
Review.create(user: v1, tour: t1, comment: 'He is amazing guide ever', rating: '5')
