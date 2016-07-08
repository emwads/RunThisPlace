json.extract!(workout,
  :id, :user_id, :workout_type, :title, :description, :date, :distance, :calories)

if show_user
  json.userId workout.user.id
  json.username workout.user.username
  json.picture_url workout.user.picture_url
end

if show_route && workout.run_route
  json.routeId workout.run_route_id
  json.routeTitle workout.run_route.title
  json.map_info workout.run_route.map_info
end

if show_comments
  json.comments workout.comments do |comment|
    json.partial! "api/comments/comment", comment: comment

  end
end
