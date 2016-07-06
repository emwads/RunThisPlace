json.extract! user, :id, :username, :email, :name, :birthdate, :weight, :height, :picture_url

json.followers user.following do |user|
  json.name          user.username
  json.followee_id   user.id
end
