class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)

    if @team.save
      render "api/teams/show"
    else
      render json: @team.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def team_params
    params.require(:team).permit(:team_owner_id, :name, :description)
  end
end
