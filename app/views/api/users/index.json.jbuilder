
json.array! @users do |user|
  next if user == current_user

  json.id           user.id
  json.username     user.username
  json.picture_url  user.picture_url
  json.following    @follows.include?(user)

end
