json.extract! team, :id, :team_owner_id, :name, :description
json.set! :members, team.members
json.set! :members_by_id, team.members.map { |member| member.id }
