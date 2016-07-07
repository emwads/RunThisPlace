class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id
      t.integer :workout_id
      t.text :body
      t.timestamps null: false
    end
      
    add_index :comments, :workout_id
    add_index :comments, :author_id
  end
end
