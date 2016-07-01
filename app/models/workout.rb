class Workout < ActiveRecord::Base
  validates :user_id, :workout_type, :title, :date, presence: true
  validates :workout_type, inclusion: %w(run walk hike gym other)

  belongs_to :user

  belongs_to :run_route

end
