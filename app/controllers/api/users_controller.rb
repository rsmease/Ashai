class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      #not sure what this should be just yet
      render root_url
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def edit
    #not sure what to do here just yet
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :bio, :profile_image_url)
  end

end
