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
    @workouts = current_user.workouts
  end

  def destroy
    @workout = Workout.find(params[:id])

    if @workout.destroy
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def workout_params
    params.require(:workouts).permit(:user_id, :workout_type, :run_route_id,
                                     :title, :description, :calories, :distance,
                                     :date)
  end

end
