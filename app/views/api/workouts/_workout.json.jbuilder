json.extract!(workout,
  :id, :user_id, :workout_type, :title, :description, :date, :distance, :calories)

if show_user
  json.userId workout.user.id
  json.username workout.user.username
end

if show_route
  json.routeId workout.run_route_id
  json.routeTitle workout.run_route.title
  json.map_info workout.run_route.map_info
end
