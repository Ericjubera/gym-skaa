# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
g1 = Gym.create(name:"plant fitness",location:"4800 Columbia Ave, Dallas, TX 75226",image:"https://prodd8.planetfitness.com/sites/default/files/styles/gallery_full_image/public/2020-01/a.jpg",size:"med",open:"12 am",closed:"12 pm")
g2 = Gym.create(name:"la fitness",location:"2690 N Haskell Ave., Dallas, TX 75204",image:"https://www.lafitness.com/Pages/Images/ClubExterior/697.jpg",size:"med",open:"8am",closed:"8pm")
g3 = Gym.create(name:"gold gym",location:"11411 E NW Hwy Suite 200, Dallas, TX 75218",image:"https://tours.360dallas.com/16537/slideshow15969/aee3c5b7c6b37aa0292f648b75686a78.jpg",size:"med",open:"5am",closed:"11pm")
g4 = Gym.create(name:"plant fitness",location:"4800 Columbia Ave, Dallas, TX 75226",image:"https://prodd8.planetfitness.com/sites/default/files/styles/gallery_full_image/public/2020-01/a.jpg",size:"med",open:"12am",closed:"12pm")

u1 = User.create(name:"uska",password:"123",age:21)
u2 = User.create(name:"mr 214",password:"333",age:21)
u3 = User.create(name:"gym bro",password:"123",age:21)
u4 = User.create(name:"i like to run 44",password:"4444",age:21)

Review.create(user_id: u1.id, gym_id: g1.id, review:"this gym is not that awesome" , stars:3)
Review.create(user_id: u1.id, gym_id: g2.id, review:"this gym is super awsome" , stars:5)
Review.create(user_id: u2.id, gym_id: g1.id, review:"Sweet GYM" , stars:4)
Review.create(user_id: u3.id, gym_id: g3.id, review:"its ight" , stars:3)
Review.create(user_id: u4.id, gym_id: g4.id, review:"SHeeshh this gym is packkked" , stars:3)
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
