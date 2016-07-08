class Api::CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    comment.author_id = current_user.id

    if comment.save
      @workouts = []
      current_user.following.each do |user|
        @workouts += user.workouts
      end
      render "api/workouts/index"
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])

    if comment.destroy
      @workouts = []
      current_user.following.each do |user|
        @workouts += user.workouts
      end
      render "api/workouts/index"
    else
      render json: comment.errors.full_messages, status: 422
    end
  end



  def comment_params
    params.require(:comment).permit(:workout_id, :body, :author_id)
  end
end
