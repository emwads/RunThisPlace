class RenameColInRunRoutes < ActiveRecord::Migration
  def change
    rename_column :run_routes, :first_point, :route_path

    change_column :run_routes, :route_path, :text

  end
end
