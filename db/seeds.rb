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


RunRoute.create(title: "Ferry Builing to Pier 39",
                description: "Nice 5k pedestrian 5k path",
                author_id: 1,
                map_info: "[{\"location\":{\"lat\":37.79528237319238,\"lng\":-122.3935317993164},\"stopover\":false},{\"location\":{\"lat\":37.80898152447637,\"lng\":-122.41254329812364},\"stopover\":false},{\"location\":{\"lat\":37.79473977809016,\"lng\":-122.39378929121813},\"stopover\":false}]",
                distance: 2.97)


RunRoute.create(title: "Golden Gate Park",
                description: "A scenic route through the park",
                author_id: 2,
                map_info: "[{\"location\":{\"lat\":37.77189073454407,\"lng\":-122.45447158813477},\"stopover\":false},{\"location\":{\"lat\":37.772354343171685,\"lng\":-122.46777534476678},\"stopover\":false},{\"location\":{\"lat\":37.77086173978431,\"lng\":-122.49000549316406},\"stopover\":false},{\"location\":{\"lat\":37.766655149434776,\"lng\":-122.50635623931885},\"stopover\":false},{\"location\":{\"lat\":37.766349823375414,\"lng\":-122.48369693756104},\"stopover\":false},{\"location\":{\"lat\":37.770556430834176,\"lng\":-122.45524406433105},\"stopover\":false}]",
                distance: 6.51)
