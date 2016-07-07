class Api::CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    comment.author_id = current_user.id

    if comment.save
      @workouts = current_user.workouts.order(:date)
      render "api/workouts/index"
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @workout = Workout.find(params[:id])

    if @workout.destroy
      render "api/workouts/index"
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end



  def comment_params
    params.require(:comment).permit(:workout_id, :body, :author_id)
  end
end
