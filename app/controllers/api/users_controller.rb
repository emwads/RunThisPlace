class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end


  def show
    @user = current_user
    @follows = @user.following
    render "api/users/show"
  end


  def index
    @users = User.all
    @follows = current_user.following
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render :show
    else

      render json: @user.errors, status: 422
    end
  end


  def user_params
    params.require(:user).permit(:username, :password, :name, :birthdate,
                                 :picture_url, :weight, :height, :email)
  end
end
