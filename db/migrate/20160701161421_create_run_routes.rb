class CreateRunRoutes < ActiveRecord::Migration
  def change
    create_table :run_routes do |t|

      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.text :map_info, null: false
      t.float :distance

      t.timestamps null: false
    end

    add_index :run_routes, :author_id
  end
end
