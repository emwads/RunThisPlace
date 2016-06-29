class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.string :workout_type, null: false
      t.integer :run_route_id
      t.string :title, null: false
      t.text :description
      t.integer :calories
      t.float :distance
      t.date :date


      t.timestamps null: false
    end
    add_index :workouts, :user_id
    add_index :workouts, :run_route_id

  end
end
