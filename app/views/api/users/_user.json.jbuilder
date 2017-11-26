json.extract! user, :id, :name, :email, :bio, :profile_image_url

def get_member_ids(team)
  team.members.map { |member| member.id }
end

json.set! :teams do
  json.array! user.teams do |team|
    json.extract! team, :id, :team_owner_id, :name, :description
    json.set! :member_ids, get_member_ids(team)
  end
end
