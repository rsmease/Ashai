json.extract! team, :team_owner_id, :name, :description

json.members do
  json.array! team.members, partial: 'api/users/user', as: :user
end
