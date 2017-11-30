class Api::TeamsController < ApplicationController

  def index
    @teams = Team.all
    render "api/teams/index"
  end

  def create
    @team = Team.new(team_params)
    @team.team_owner_id = current_user.id

    if @team.save
      TeamMembership.create(
        member_id: current_user.id, team_id: @team.id
      )
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team = Team.find(params[:id])
    render "api/teams/show"
  end

  def update
    @team = Team.find(params[:id])
    if @team.update(team_params)
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def destroy
    @team = Team.find(params[:id])
    if @team.destroy
      render "api/teams/show"
    else
      render plain: "You can't destroy what's not tere."
    end
  end

  private

  def team_params
    params.require(:team).permit(:team_owner_id, :name, :description)
  end
end
