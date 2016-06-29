# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create({username: "guest", password: "password"})

Workout.create({
  user_id: 1,
  workout_type: "run",
  run_route_id: nil,
  title: "Run on thursday",
  description: nil,
  calories: nil,
  distance: nil,
  date: Mon, 01 Jan -4712,
})
