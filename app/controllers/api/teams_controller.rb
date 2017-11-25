class Api::TeamsController < ApplicationController

  def index
    @teams = Team.all
    render "api/teams/index"
  end

  def create
    @team = Team.new(team_params)

    if @team.save
      render "api/teams/show"
    else
      render json: @team.full_messages, status: 422
    end
  end

  def show
    @team = Team.find(params[:id])
    render "api/teams/show"
  end

  def destroy
    @team = Team.find(params[:id])
    if @team.destroy
      redirect_to root_url
    else
      render plain: "You can't destroy what's not tere."
    end
  end

  private

  def team_params
    params.require(:team).permit(:team_owner_id, :name, :description)
  end
end
