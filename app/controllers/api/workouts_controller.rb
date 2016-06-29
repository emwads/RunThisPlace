class Api::WorkoutsController < ApplicationController

  def create
  end

  def edit
  end

  def show
    @workout = Workout.find(params[:id])
    render :show
  end

  def index
    @workouts = Workout.all
  end

  def destroy
  end

  def workout_params
    params.require(:workouts).permit(:user_id, :workout_type, :run_route_id,
                                     :title, :description, :calories, :distance,
                                     :date)
  end

end
