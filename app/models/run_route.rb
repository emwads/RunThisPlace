class RunRoute < ActiveRecord::Base
  validates :title, :author_id, :map_info, presence: true

  has_many :workouts

  has_many :users,
    through: :workouts,
    source: :user

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id



end
