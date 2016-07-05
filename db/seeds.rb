# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({username: "guest", password: "password", name: "Guest",
            birthdate: Date.new(1985, 6, 20), weight: 194.5, height: 71,
            email: 'guest@guest.io',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_128/v1467706153/8_kdq2xw.jpg'})
User.create({username: "andy1995", password: "password", name: "Andy",
            birthdate: Date.new(1995, 11, 9), weight: 143, height: 68,
            email: 'andy238934@gmail.com.',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/31_cyrddk.jpg'})
User.create({username: "bobilicious", password: "password", name: "Bobby",
            birthdate: Date.new(1972, 1, 18), weight: 163, height: 73,
            email: 'happiness@bing.com',
            picture_url: 'http://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/58_f75y3r.jpg'})
User.create({username: "carlyP", password: "password", name: "Carly",
            birthdate: Date.new(1965,6, 20), weight: 112, height: 61,
            email: 'irunfast@hotmail.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/16_apqphg.jpg'})
User.create({username: "xXDANIXx", password: "password", name: "Dani",
            birthdate: Date.new(1983, 9, 22), weight: 105, height: 64,
            email: 'xXdAnIXx@aol.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/63_nwqfvc.jpg'})



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


RunRoute.create(title: "Ferry Building to Pier 39",
                description: "Nice 5k pedestrian path",
                author_id: 1,
                map_info: "[{\"location\":{\"lat\":37.79528237319238,\"lng\":-122.3935317993164},\"stopover\":false},{\"location\":{\"lat\":37.80898152447637,\"lng\":-122.41254329812364},\"stopover\":false},{\"location\":{\"lat\":37.79473977809016,\"lng\":-122.39378929121813},\"stopover\":false}]",
                distance: 2.97)


RunRoute.create(title: "Golden Gate Park",
                description: "A scenic route through the park",
                author_id: 2,
                map_info: "[{\"location\":{\"lat\":37.77189073454407,\"lng\":-122.45447158813477},\"stopover\":false},{\"location\":{\"lat\":37.772354343171685,\"lng\":-122.46777534476678},\"stopover\":false},{\"location\":{\"lat\":37.77086173978431,\"lng\":-122.49000549316406},\"stopover\":false},{\"location\":{\"lat\":37.766655149434776,\"lng\":-122.50635623931885},\"stopover\":false},{\"location\":{\"lat\":37.766349823375414,\"lng\":-122.48369693756104},\"stopover\":false},{\"location\":{\"lat\":37.770556430834176,\"lng\":-122.45524406433105},\"stopover\":false}]",
                distance: 6.51)

RunRoute.create(title: "Ferry Building to Pier 39",
                description: "Nice 5k pedestrian path",
                author_id: 1,
                map_info:
                 "[{\"location\":{\"lat\":37.79528237319238,\"lng\":-122.3935317993164},\"stopover\":false},{\"location\":{\"lat\":37.80898152447637,\"lng\":-122.41254329812364},\"stopover\":false},{\"location\":{\"lat\":37.79473977809016,\"lng\":-122.39378929121813},\"stopover\":false}]",
                distance: 2.97)

RunRoute.create(title: "Lake Merrit",
                description: "Oakland, CA",
                author_id: 3,
                map_info: "[{\"location\":{\"lat\":37.81046205554298,\"lng\":-122.26216793060303},\"stopover\":false},{\"location\":{\"lat\":37.80815648152641,\"lng\":-122.26143836975098},\"stopover\":false},{\"location\":{\"lat\":37.80663069443297,\"lng\":-122.26049423217773},\"stopover\":false},{\"location\":{\"lat\":37.805274412773024,\"lng\":-122.256760597229},\"stopover\":false},{\"location\":{\"lat\":37.807410545108375,\"lng\":-122.25221157073975},\"stopover\":false},{\"location\":{\"lat\":37.801951417436676,\"lng\":-122.2547435760498},\"stopover\":false},{\"location\":{\"lat\":37.798662182986924,\"lng\":-122.25907802581787},\"stopover\":false},{\"location\":{\"lat\":37.80347730120659,\"lng\":-122.26075172424316},\"stopover\":false},{\"location\":{\"lat\":37.80791913893801,\"lng\":-122.26306915283203},\"stopover\":false},{\"location\":{\"lat\":37.81027557796748,\"lng\":-122.2622537612915},\"stopover\":false}]",
                distance: 3.18)
