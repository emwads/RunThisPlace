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
User.create({username: "andy1995", password: "password", name: "Andy Success",
            birthdate: Date.new(1995, 11, 9), weight: 143, height: 68,
            email: 'andy238934@gmail.com.',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/31_cyrddk.jpg'})
User.create({username: "bobilicious", password: "password", name: "Bobby Tableau",
            birthdate: Date.new(1972, 1, 18), weight: 163, height: 73,
            email: 'happiness@bing.com',
            picture_url: 'http://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/58_f75y3r.jpg'})
User.create({username: "carlyP", password: "password", name: "Carly Marks",
            birthdate: Date.new(1965,6, 20), weight: 112, height: 61,
            email: 'irunfast@hotmail.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/16_apqphg.jpg'})
User.create({username: "xXDANIXx", password: "password", name: "Dani California",
            birthdate: Date.new(1983, 9, 22), weight: 105, height: 64,
            email: 'xXdAnIXx@aol.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1467706152/63_nwqfvc.jpg'})
User.create({username: "eroberts", password: "brooke", name: "Erica Roberts",
            birthdate: Date.new(1973, 9, 5), weight: 135, height: 57,
            email: 'erica.roberts73@example.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1468017422/35_fnpfgs.jpg'})
User.create({username: "bchan", password: "password", name: "Brett Chan",
            birthdate: Date.new(1993, 7, 25), weight: 190, height: 67,
            email: 'brett.chan43@example.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1468017422/90_eanw20.jpg'})
User.create({username: "fredee", password: "password", name: "Fred Davidson",
            birthdate: Date.new(1983, 4,4), weight: 176, height: 70,
            email: 'fred.davidson97@example.com',
            picture_url: 'https://res.cloudinary.com/dznf6puuv/image/upload/v1468017423/66_vyaoci.jpg'})


Follow.create(follower_id: 1, followee_id: 2)
Follow.create(follower_id: 1, followee_id: 4)
Follow.create(follower_id: 1, followee_id: 7)
Follow.create(follower_id: 2, followee_id: 3)
Follow.create(follower_id: 2, followee_id: 1)
Follow.create(follower_id: 3, followee_id: 2)
Follow.create(follower_id: 3, followee_id: 1)
Follow.create(follower_id: 4, followee_id: 2)
Follow.create(follower_id: 4, followee_id: 8)
Follow.create(follower_id: 4, followee_id: 1)
Follow.create(follower_id: 5, followee_id: 4)
Follow.create(follower_id: 5, followee_id: 1)
Follow.create(follower_id: 6, followee_id: 5)
Follow.create(follower_id: 6, followee_id: 1)
Follow.create(follower_id: 7, followee_id: 8)
Follow.create(follower_id: 7, followee_id: 1)
Follow.create(follower_id: 8, followee_id: 6)
Follow.create(follower_id: 8, followee_id: 4)
Follow.create(follower_id: 8, followee_id: 1)



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



Workout.create(user_id: 1, workout_type: "run",
  distance: 2.3,
  title: "Leisurely jog",
  calories: 320,
  description: "The weather was perfect for a jog today",
  date: Time.now.to_date,
  run_route_id: 1)
Workout.create(user_id: 1, workout_type: "gym", title: "Weights at the gym", date: Date.new(2016,06,25), description: "Pounded those protein shakes today", calories: 132)
Workout.create(user_id: 2, workout_type: "run", title: "Tempo run", date: Date.new(2016,06,27), run_route_id:1, distance: RunRoute.find(1).distance, description: "Hot day for a workout.", calories: 124)
Workout.create(user_id: 4, workout_type: "gym", title: "Gym workout", date: Date.new(2016,06,28), calories: 325, description: "group ex class")
Workout.create(user_id: 1, workout_type: "run", title: "Practice Timed run", date: Date.new(2016,06,23), run_route_id:2,  distance: RunRoute.find(2).distance, calories:382)
Workout.create(user_id: 1, workout_type: "run", title: "Long run", date: Date.new(2016,06,22), run_route_id:1,  distance: RunRoute.find(1).distance, description: "Day 1 of new training plan", calories: 321)

def generate_rand_workout!()
  work_type= %w(gym hike walk).sample
  Workout.create!(
    user_id: (1..8).to_a.sample,
    workout_type: work_type,
    calories: (100..350).to_a.sample,
    date: (0..180).to_a.sample.days.ago.to_date,
    title: [ "Long #{work_type}",
              "Hard #{work_type}",
              "Challenging #{work_type}",
              "New #{work_type}",
              "Easy #{work_type}",
              "Difficult #{work_type}",
              "Refreshing #{work_type}",
              "Long and hard #{work_type}",
              "Tiring #{work_type}"].sample ,

    description: [ "A lovely day for a #{work_type}",
                  "Today was the first day of my new fitness goal!",
                  "I work out for the endorphines",
                  "Today was a little too hot to be out for #{work_type}ing",
                  "I'm so tired after this #{work_type}",
                  "This workout was better than dancing in the moonlight!",
                  "Getting pumped!",
                  "I feel stronger than last time!!",
                  "I worked harder than yesterday",
                  "This was more of an off day. I'll try harder next time.",
                  "I was very encouraged by all my friends around me.",
                  "Worked hard to try to keep up with the guy next to me",
                  "Today, I'm one step closer to my goal",
                  "The weather was nice out today.",
                  "It was too nice to stay in today",
                  "I'm already feeling sore",
                  "I have a feeling I will be too sore to go to work tomorrow",
                  "This was the best #{work_type} in a while."].sample
  )

end


def generate_rand_run!()
  work_type= "run"
  r_id = (1..4).to_a.sample
  Workout.create!(
    user_id: (1..8).to_a.sample,
    workout_type: work_type,
    calories: (100..350).to_a.sample,
    date: (0..180).to_a.sample.days.ago.to_date,
    run_route_id: r_id,
    distance: RunRoute.find(r_id).distance,
    title: [ "Long #{work_type}",
              "Hard #{work_type}",
              "Challenging #{work_type}",
              "New #{work_type}",
              "Easy #{work_type}",
              "Difficult #{work_type}",
              "Refreshing #{work_type}",
              "Long and hard #{work_type}",
              "Tiring #{work_type}"].sample ,

    description: [ "A lovely day for a #{work_type}",
                  "Today was the first day of my new fitness goal!",
                  "I work out for the endorphines",
                  "Today was a little too hot to be out for #{work_type}ing",
                  "I'm so tired after this #{work_type}",
                  "This workout was better than dancing in the moonlight!",
                  "Getting pumped!",
                  "I feel stronger than last time!!",
                  "I worked harder than yesterday",
                  "This was more of an off day. I'll try harder next time.",
                  "I was very encouraged by all my friends around me.",
                  "Worked hard to try to keep up with the guy next to me",
                  "Today, I'm one step closer to my goal",
                  "The weather was nice out today.",
                  "It was too nice to stay in today",
                  "I'm already feeling sore",
                  "I have a feeling I will be too sore to go to work tomorrow",
                  "This was the best #{work_type} in a while."].sample
  )

end


30.times do
  generate_rand_workout!
  generate_rand_run!
end





Comment.create(author_id: 2, workout_id: 1, body: "Good job on that run!")
Comment.create(author_id: 3, workout_id: 1, body: "wow! what a fast run!")


def generate_comments!
  w=Workout.all.length

    Comment.create!(
      workout_id: (1..w).to_a.sample,
      author_id: (1..7).to_a.sample,
      body: [
        "Nice workout!",
        "Good Job!",
        "Great seeing you out there",
        "You can do it even better next time!",
        "I have some helpful tips I can give you some time",
        "I'm pretty proud of you",
        "Awesome job!",
        "I'm extremely proud of you!",
        "You rocked it",
        "You rocked it out there!",
        "It's encouraging to see how hard you work towards your goals",
        "You're an inspiration to me and my boys",
        "You're an inspiration to me and my girls",
        "You're an inspiration to me and my children",
        "Good choice in workouts today",
        "Your tenacity is encouraing",
        "Hardcore!",
        "Fantastic!",
        "Astonishing!"
      ].sample
    )
end

100.times do
  generate_comments!
end
