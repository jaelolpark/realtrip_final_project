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

t1 = Tour.create(title: 'New York Snapshot', detail: "I want to keep New York, moments of travel. Keep sparkling moments in New York. You can keep those moments memorable through your trip to New York with great pictures. It is recommended for those who want to shoot in their own atmosphere with one hour package. I hope this snapshot with me will help me get closer to New York. It is a one-hour New York snap with enjoying and enjoying that moment of shooting is part of the trip.", second_language: 'Korean', number_of_ppl: '2', price: '100', location: '589 5th Ave, New York, NY 10017', include: 'Snapshot',user: g1, start_time: Time.now, end_time: Time.now, image_url: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/42494/263612_large_1536809824.jpg?1536809824')
t2 = Tour.create(title: 'Niagara Falls Tour in a day', detail: "Niagara Falls is a city on the Niagara River, in New York State. It’s known for the vast Niagara Falls, which straddle the Canadian border. In Niagara Falls State Park, the Observation Tower, at Prospect Point, juts out over Niagara Gorge for a view of all 3 waterfalls. Trails from the Niagara Gorge Discovery Center lead to other viewpoints. The Aquarium of Niagara is home to Humboldt penguins, seals and sea lions.", second_language: 'Japanese', number_of_ppl: '6', price: '300', location: '4200 Genesee St, Buffalo, NY 14225', include: 'Lunch, Cruise', exclude: 'JetBoat tour', image_url: 'https://d1blyo8czty997.cloudfront.net/tour-photos/5733/1200x600/3572767026.jpg', user: g1)
t3 = Tour.create(title: 'MOMA tour with artist', detail: "Many people come to New York to visit museums, but they do not see anything. What I saw with my eyes is like I did not see anything. It will soon be forgotten. What we will see is not just the images we can see in books or online, but the very only ones in the world of the breath and soul of the masters. I will bring you a piece of work that you will never forget for a lifetime.", second_language: 'Spanish', number_of_ppl: '2', price: '70', location: '11 W 53rd St, New York, NY 10019', include: 'ticket', image_url: 'https://www.lacasaencendida.es/sites/default/files/styles/full/public/retratos_nueva_york_2.jpg?itok=ft-PBHT_', user: g1)
t4 = Tour.create(title: 'Newyork Tour in a day', detail: "The Manhattan Mid & Downtown Group Tour is one of the most effective day touring tours in Manhattan, including a ferry ride to the Statue of Liberty. We will explain the main landmarks and tours during the vehicle move, and the guide will take the tour with the driver on the driving permit. In addition, we take a ferry to watch 'Statue of Liberty' during schedule.", second_language: 'Korean', number_of_ppl: '5', price: '90', location: '302 5th Avenue New York, NY 10001', include: 'Ferry', exclude: 'Lunch', image_url: 'https://d1blyo8czty997.cloudfront.net/tour-photos/853/1200x600/6276689275.jpg', user: g1)



Booking.create(user: v1, tour: t1)
Review.create(user: v1, tour: t1, comment: 'He is amazing guide ever', rating: '5')
