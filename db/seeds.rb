# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({username: "guest", password: "password"})
User.create({username: "andy", password: "password"})
User.create({username: "bobby", password: "password"})
User.create({username: "carly", password: "password"})


Workout.create(user_id: 1, workout_type: "run",
  distance: 2.3,
  title: "Leisurely jog",
  calories: 320,
  description: "The weather was perfect for a jog today",
  date: Time.now.to_date,
  run_route_id: 1)
Workout.create(user_id: 1, workout_type: "gym", title: "Weights at the gym", date: Date.new(2016,06,25))
Workout.create(user_id: 2, workout_type: "run", title: "Tempo run", date: Date.new(2016,06,27), run_route_id:1)
Workout.create(user_id: 4, workout_type: "gym", title: "Gym workout", date: Date.new(2016,06,28))
Workout.create(user_id: 1, workout_type: "run", title: "Practice Timed run", date: Date.new(2016,06,23), run_route_id:2)
Workout.create(user_id: 1, workout_type: "run", title: "Long run", date: Date.new(2016,06,22), run_route_id:1)


RunRoute.create(title: "cool run",  description: "for a long day", author_id: 1, map_info: "insert map points here")
RunRoute.create(title: "5k course",  description: "flat and fast 5k route", author_id: 2, map_info: "insert map points here", distance: 3.1)
