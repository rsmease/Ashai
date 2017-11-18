class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials
    (params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      #not sure what to do here just yet
      render root_url
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      #not sure what to do here just yet
      render root_url
    else
      render json: ["No one is signed in"], status: 404
    end
  end

end
