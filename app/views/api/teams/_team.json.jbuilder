json.extract! team, :id, :team_owner_id, :name, :description
json.set! :members, team.members
