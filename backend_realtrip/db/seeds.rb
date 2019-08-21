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

g1 = User.create(first_name: 'Jae', last_name: 'Park', username: 'jae', password: '123', to_be_guide: 'true', second_language: 'Korean', introduce: 'I am the best guide in the world', avatar: 'https://avatars1.githubusercontent.com/u/47694971?s=460&v=4')
g2 = User.create(first_name: 'Andrew', last_name: 'Allen', username: 'andrew', password: '123', to_be_guide: 'true', second_language: 'Spanish', introduce: 'I have lived in Manhatten for 10 years', avatar: 'https://avatars0.githubusercontent.com/u/47508562?s=460&v=4')
g3 = User.create(first_name: 'Preston', last_name: 'Elliott', username: 'preston', password: '123', to_be_guide: 'true', second_language: 'Chinese', introduce: 'I love food, so I know all of good restaurants in NY', avatar: 'https://avatars0.githubusercontent.com/u/46748725?s=460&v=4')
g4 = User.create(first_name: 'Scott', last_name: 'Toney', username: 'scott', password: '123', to_be_guide: 'true', second_language: 'French', introduce: 'I studied arts in NYU. Also I am working as an artist', avatar: 'https://avatars2.githubusercontent.com/u/46227219?s=460&v=4')
g5 = User.create(first_name: 'Deka', last_name: 'Ambia', username: 'deka', password: '123', to_be_guide: 'true', second_language: 'Spanish', introduce: 'I love taking pictures for others. Also I am working as a professional photographer in NYC now.', avatar: 'https://avatars1.githubusercontent.com/u/48366603?s=460&v=4')


v1 = User.create(first_name: 'Evan', last_name: 'Kim', username: 'evan', password: '123', introduce: '', to_be_guide: 'false')
v2 = User.create(first_name: 'Romy', last_name: 'Maghsoudi', username: 'romy', password: '123', to_be_guide: 'false', introduce: '', avatar: 'https://avatars2.githubusercontent.com/u/43018235?s=460&v=4')
v3 = User.create(first_name: 'Rose', last_name: 'Lake', username: 'rose', password: '123', to_be_guide: 'false', introduce: '', avatar: 'https://avatars2.githubusercontent.com/u/47694838?s=460&v=4')
v4 = User.create(first_name: 'Tun', last_name: 'Khine', username: 'tun', password: '123', to_be_guide: 'false', introduce: '', avatar: 'https://avatars3.githubusercontent.com/u/19766367?s=460&v=4')
v5 = User.create(first_name: 'William', last_name: 'Jones', username: 'will', password: '123', introduce: '', to_be_guide: 'false')
v6 = User.create(first_name: 'Tez', last_name: 'Smith', username: 'tez', password: '123', introduce: '', to_be_guide: 'false', avatar: 'https://avatars0.githubusercontent.com/u/38469636?s=460&v=4')
v7 = User.create(first_name: 'Paula', last_name: 'Tulis', username: 'paula', password: '123', introduce: '', to_be_guide: 'false', avatar: 'https://avatars3.githubusercontent.com/u/47359669?s=460&v=4')
v8 = User.create(first_name: 'Hanaa', last_name: 'Sadoqi', username: 'Hanaa', password: '123', introduce: '', to_be_guide: 'false', avatar: 'https://avatars3.githubusercontent.com/u/40529421?s=460&v=4')
v9 = User.create(first_name: 'Brit', last_name: 'Butler', username: 'brit', password: '123', introduce: '', to_be_guide: 'false')
v10 = User.create(first_name: 'Han', last_name: 'Xu', username: 'han', password: '123', introduce: '', to_be_guide: 'false')


t1 = Tour.create(title: 'New York Snapshot', details: "I want to keep New York, moments of travel. Keep sparkling moments in New York. You can keep those moments memorable through your trip to New York with great pictures. It is recommended for those who want to shoot in their own atmosphere with one hour package. I hope this snapshot with me will help me get closer to New York. It is a one-hour New York snap with enjoying and enjoying that moment of shooting is part of the trip.", second_language: 'Korean', number_of_ppl: '2', price: '100', location: 'Newyork', include: 'Snapshot', guide: g5, image_url: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/42494/263612_large_1536809824.jpg?1536809824')
t2 = Tour.create(title: 'Niagara Falls Tour in a day', details: "Niagara Falls is a city on the Niagara River, in New York State. It’s known for the vast Niagara Falls, which straddle the Canadian border. In Niagara Falls State Park, the Observation Tower, at Prospect Point, juts out over Niagara Gorge for a view of all 3 waterfalls. Trails from the Niagara Gorge Discovery Center lead to other viewpoints. The Aquarium of Niagara is home to Humboldt penguins, seals and sea lions.", second_language: 'Japanese', number_of_ppl: '6', price: '300', location: 'Newyork', include: 'Lunch, Cruise', exclude: 'JetBoat tour', image_url: 'https://d1blyo8czty997.cloudfront.net/tour-photos/5733/1200x600/3572767026.jpg', guide: g2)
t3 = Tour.create(title: 'MOMA tour with artist', details: "Many people come to New York to visit museums, but they do not see anything. What I saw with my eyes is like I did not see anything. It will soon be forgotten. What we will see is not just the images we can see in books or online, but the very only ones in the world of the breath and soul of the masters. I will bring you a piece of work that you will never forget for a lifetime.", number_of_ppl: '2', price: '70', location: 'Newyork', include: 'ticket', image_url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/60/65.jpg', guide: g4)
t4 = Tour.create(title: 'Newyork Tour in a day', details: "The Manhattan Mid & Downtown Group Tour is one of the most effective day touring tours in Manhattan, including a ferry ride to the Statue of Liberty. We will explain the main landmarks and tours during the vehicle move, and the guide will take the tour with the driver on the driving permit. In addition, we take a ferry to watch 'Statue of Liberty' during schedule.", number_of_ppl: '5', price: '90', location: 'Newyork', include: 'Ferry', exclude: 'Lunch', image_url: 'https://d1blyo8czty997.cloudfront.net/tour-photos/853/1200x600/6276689275.jpg', guide: g3)
t5 = Tour.create(title: 'Shopping Paradise Woodbury Outlets', details: "Woodbury Outlets, home to over 220 luxury fashion goods stores New York's largest shopping town, Woodbury Outlets. The course takes about 9 hours, including travel time, and guarantees shopping hours from 4 am to 4 pm We offer coupon book for cheap pick-up drop as well as cheap shopping! Shopping It is a perfect New York shopping trip where you can leave your baggage and enjoy shopping more easily!", number_of_ppl: '8', price: '50', location: 'Newyork', include: 'Coupon Book, Bus', exclude: 'Lunch', image_url: 'https://cdn.tourcms.com/a/5889/46/2/large.jpg', guide: g2)
t6 = Tour.create(title: 'LV Hotel Tour in a day', details: "During the day, you can visit over 20 hotels located on the strip and enjoy various fountain shows and fireworks displays. It also travels in the guide's car, and lunch is also provided.", number_of_ppl: '10', price: '60', location: 'Las Vegas', include: 'Bus, Lunch', exclude: 'Snacks', image_url: 'https://amp.insider.com/images/5af09b89bd967120008b460b-750-562.jpg', guide: g1)
t7 = Tour.create(title: 'The most luxurious night view of Las Vegas!', details: "Travel with loved ones, gorgeous and romantic night view from the sky. It is a tour that you can appreciate the splendid and beautiful night view of Las Vegas with a helicopter at a glance. Limousine pick-up from hotel to stay. You can enjoy a glass of champagne while waiting for a helicopter at a private terminal. You can see it from the Mandalay Bay Hotel to the Old downtown as opposed to the clichest strip view seen in the limited space of the observation deck. For those who want to leave a spectacular night view of Las Vegas as an over-the-top view, It is a luxury tour recommended for those who want to make memories.", number_of_ppl: '4', price: '100', location: 'Las Vegas', include: 'Hotel limousine pickup, Champagne', exclude: 'Snacks', image_url: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/29365/201097_large_1525763587.jpg?1525763587', guide: g1)
t8 = Tour.create(title: 'Grand Canyon Camping Tour', details: "We are one of the local travel agencies of Las Vegas and have a luxurious camping facility and are a professional camping company with the best customer service and quality. All our team members and long-experienced veteran guides are committed to ensuring 100% customer satisfaction from the start to the end of travel so that there is no regrets in the choice of travelers, and we do our best to increase the safety and pleasure of our customers. With a perfect course selection, a great program, and a guide-friendly explanation, the Four Seasons camping tours will make every traveler feel closer, feel, breathe and enjoy the true nature of camping.", number_of_ppl: '5', price: '250', location: 'Las Vegas', include: 'Camping, food, Van', exclude: 'Entrance fee', image_url: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/27825/364592_large_1558837500.jpg?1558837500', guide: g1)
t9 = Tour.create(title: 'Ivy League University Tour', details: "Social table An ambitious Ivy League tour in New York! It is the only tour that you can take away from the sightseeing tour of the school campus and ask about the information needed for admission and the direction of the children's education together. Upon request, you can meet Yale, Brown, Harvard and MIT students. Rhode Island's Newport, lobster meals, and Boston's historic tours are also ongoing. It is a tour that includes hotel, meal, consultant and vehicle.", number_of_ppl: '4', price: '1000', location: 'Newyork', include: 'Van', exclude: 'Lunch, Dinner', image_url: 'https://media.xconomy.com/wordpress/wp-content/images/2016/05/06162146/MIT-campus-stock-image-1100x733.jpg', guide: g2)
t10 = Tour.create(title: 'Central Park Bike Tour', details: "Take a chance to explore New York City with a bike! If you want to cycle around Central Park, or just want to go around Manhattan, rent a bicycle. Our Central Park bicycle rental service has more than 150 high quality bikes. There are various kinds of bicycles such as general type, hybrid, mountain bike, two-person bicycle. Child seats and trailers can also be rented.", number_of_ppl: '10', price: '20', location: 'Newyork', include: 'Bicycle, Helmet', exclude: 'Lunch', image_url: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/10254/62354_large_1525756260.jpg?1525756260', guide: g4)
t11 = Tour.create(title: 'New York East Village Tour', details: "I will show you the free gallery and the taste of coffee you have not tasted anywhere in East Village, which is becoming a new and exciting destination. Walking wall paintings and vintage shops are another attraction. The Tenement Museum is not well known to tourists, but it provides a glimpse of the lives of early immigrants and helps them understand the history of New York. I will also take a break for a tired leg during the trip and have a great trip, but I will take a natural look at taking pictures that were hobby and specialty so far.", number_of_ppl: '3', price: '100', location: 'Newyork', include: 'Photo', exclude: 'Lunch', image_url: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/29808/187903_large_1525747192.jpg?1525747192', guide: g5)
t12 = Tour.create(title: 'Enjoy 5-hour Jazz tours like New Yorkers', details: "Miles Davis, John Curt Lane, Billy Holliday and others. I was a jazz enthusiast so I listened to jazz history classes during college. 13 years ago, not only in Greenwich Village, I occupied Soul Food + Famous Jazz Bar at the time I lived in Harlem. Jazz enthusiasts are here! You can also see indie bands performing in a neighborhood where you have not seen traditional jazz performances, and a historic live bar where Jimmy Hendrix and Bob Dylan performed. We will listen according to your taste!", number_of_ppl: '5', price: '100', location: 'Newyork', include: 'Photo', exclude: 'Drink', image_url: 'https://i.ytimg.com/vi/ud2KIk8EJWg/maxresdefault.jpg', guide: g4)

Booking.create(user: g1, tour: t12)

Booking.create(user: v1, tour: t7)
Booking.create(user: v2, tour: t8)
Booking.create(user: v3, tour: t9)
Booking.create(user: v4, tour: t10)
Booking.create(user: v5, tour: t11)
Booking.create(user: v6, tour: t12)
Booking.create(user: v7, tour: t1)
Booking.create(user: v8, tour: t2)
Booking.create(user: v9, tour: t3)
Booking.create(user: v10, tour: t1)
Booking.create(user: v1, tour: t1)
Booking.create(user: v2, tour: t2)
Booking.create(user: v3, tour: t3)
Booking.create(user: v4, tour: t4)
Booking.create(user: v5, tour: t5)
Booking.create(user: v6, tour: t6)
Booking.create(user: v7, tour: t7)
Booking.create(user: v8, tour: t8)
Booking.create(user: v9, tour: t9)
Booking.create(user: v10, tour: t10)
Booking.create(user: v1, tour: t11)
Booking.create(user: v2, tour: t12)
Booking.create(user: v3, tour: t1)
Booking.create(user: v4, tour: t2)
Booking.create(user: v5, tour: t3)
Booking.create(user: v6, tour: t4)
Booking.create(user: v7, tour: t5)
Booking.create(user: v8, tour: t6)
Booking.create(user: v9, tour: t7)
Booking.create(user: v10, tour: t8)
Booking.create(user: v1, tour: t9)
Booking.create(user: v2, tour: t10)
Booking.create(user: v3, tour: t11)
Booking.create(user: v4, tour: t12)
Booking.create(user: v5, tour: t1)
Booking.create(user: v6, tour: t2)
Booking.create(user: v7, tour: t3)
Booking.create(user: v8, tour: t4)
Booking.create(user: v9, tour: t5)
Booking.create(user: v10, tour: t6)






Review.create(user: v1, tour: t1, comment: 'He is amazing guide ever', rating: '5')
