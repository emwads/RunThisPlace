class Api::CommentsController < ApplicationController

  def create
    follow = Follow.new(follow_params)
    follow.follower_id = current_user.id

    if follow.save
      @users = User.all
      @follows = current_user.following
      render "api/users/index"
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @workout = Workout.find(params[:id])

    if @workout.destroy
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def index
    @followings = current_user.following
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
