class Api::TaskSearchesController < ApplicationController
    def index
        @tasks = Task.search_results(search_params[:query])
        render "api/tasks/index"
    end

    private

    def search_params
        params.require(:search).permit(:query)
    end
end
