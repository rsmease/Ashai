def get_team_ids(user)
  user.teams.map { |team| team.id }
end

@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :email, :bio, :profile_image_url
    json.set! :teams_by_id, get_team_ids(user)
  end
end
