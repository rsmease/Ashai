class Api::UserSearchesController < ApplicationController

  def index
    @users = User.search_results(search_params[:query], current_user.id)
    render "api/user_searches/index"
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
