class Api::ProjectMembershipsController < ApplicationController
  def create
    @project_membership = ProjectMembership.new(project_membership_params)

    if @project_membership.save
      @project = @project_membership.project
      render "api/projects/show"
    else
      render json: @project_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @project_membership = ProjectMembership.find(params[:id])
    if @project_membership.destroy
      redirect_to root_url
    else
      render plain: "You can't destroy what's not tere."
    end
  end

  private

  def project_membership_params
    params.require(:project_membership).permit(:project_id, :member_id)
  end
end
