json.extract! user, :id, :name, :email, :bio, :profile_image_url

def get_member_ids(group)
  group.members.map { |member| member.id }
end

json.set! :teams do
  json.array! user.teams do |team|
    json.extract! team, :id, :team_owner_id, :name, :description
    json.set! :members, team.members
    json.set! :members_by_id, get_member_ids(team)
  end
end

json.set! :projects do
  json.array! user.projects do |project|
    json.extract! project, :id, :project_owner_id, :name, :description
    json.set! :members_by_id, get_member_ids(project)
  end
end
