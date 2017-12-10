class Api::TeamSearchesController < ApplicationController
  def index
    @teams = Team.search_results(search_params[:query])
    render "api/teams/index"
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
