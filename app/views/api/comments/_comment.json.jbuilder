json.extract!(comment, :id, :author_id, :workout_id, :body)
json.picture_url comment.author.picture_url
