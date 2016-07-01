json.extract!(workout,
  :id, :user_id, :workout_type, :title, :description, :date)

if show_user
  json.userId workout.user.id
  json.username workout.user.username

end
