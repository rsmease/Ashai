class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
    if @user
      login(@user)
      #not sure what to do here just yet
      redirect_to api_user_url(@user)
    else
      flash.now[:errors] = ['Invalid username or password.']
      render :new
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      #not sure what to do here just yet
      redirect_to root_url
    else
      render json: ["No one is signed in"], status: 404
    end
  end

end
