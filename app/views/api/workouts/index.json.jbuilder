# @workouts.each do |workout|
#   json.set! workout.id do
#     json.partial! 'workout', workout: workout
#   end
# end

json.array!(@workouts) do |workout|
  json.partial!('api/workouts/workout', workout: workout,
                show_user: false,
                show_route: false,
                show_comments: true)
end
