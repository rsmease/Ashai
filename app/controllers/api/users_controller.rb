class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      #not sure what this should be just yet
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  # def edit
  #   @user = User.find(params[:id])
  #   render "api/users/edit"
  # end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      redirect_to root_url
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :bio, :profile_image_url)
  end

end
