def get_team_ids(user)
  user.teams.map { |team| team.id }
end

def get_project_ids(user)
  user.projects.map{ |project| project.id }
end

@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :email, :bio, :profile_image_url
    json.set! :teams_by_id, get_team_ids(user)
    json.set! :projects_by_id, get_project_ids(user)
  end
end
