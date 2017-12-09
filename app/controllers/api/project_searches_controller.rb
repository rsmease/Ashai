class Api::ProjectSearchesController < ApplicationController
  def index
    @projects = Project.search_results(search_params[:query])
    render "api/projects/index"
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end
end
