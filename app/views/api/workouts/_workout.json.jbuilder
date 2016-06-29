json.extract!(workout,
  :id, :user_id, :workout_type, :title, :description, :date)

if show_user
  json.partial! 'api/users/user', user: workout.user
end
