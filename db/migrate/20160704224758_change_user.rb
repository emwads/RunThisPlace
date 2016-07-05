class ChangeUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :birthdate, :date
    add_column :users, :picture_url, :string
    add_column :users, :weight, :float
    add_column :users, :height, :integer
    add_column :users, :email, :string

    change_column_null :users, :email, false
    change_column_null :users, :picture_url, false

  end

end
