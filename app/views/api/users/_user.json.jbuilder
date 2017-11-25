json.extract! user, :id, :name, :email, :bio, :profile_image_url

def get_teams(user)
  user.teams
end

json.set! :teams, user.teams
