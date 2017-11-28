class Api::ProjectsController < ApplicationController

    def index
      @projects = Project.all
      render "api/projects/index"
    end

    def create
      @project = Project.new(project_params)
      @project.project_owner_id = current_user.id

      if @project.save
        render "api/projects/show"
      else
        render json: @project.full_messages, status: 422
      end
    end

    def show
      @project = Project.find(params[:id])
      render "api/projects/show"
    end

    def destroy
      @project = Project.find(params[:id])
      if @project.destroy
        redirect_to root_url
      else
        render plain: "You can't destroy what's not tere."
      end
    end

    private

    def project_params
      params.require(:project).permit(:project_owner_id, :name, :description)
    end

end
