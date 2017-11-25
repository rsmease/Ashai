json.extract! user, :id, :name, :email, :bio, :profile_image_url

def get_team_ids(user)
  user.teams.map { |team| team.id }
end

json.set! :teams_by_id, get_team_ids(user)
