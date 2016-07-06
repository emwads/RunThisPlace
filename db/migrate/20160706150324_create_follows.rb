class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|

      t.timestamps null: false
    end
  end
end
