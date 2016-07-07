class Comment < ActiveRecord::Base
  validates :author_id, :workout_id, :body,  presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

    belongs_to :workout,
      class_name: 'Workout',
      foreign_key: :workout_id,
      primary_key: :id

end
