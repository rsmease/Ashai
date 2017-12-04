json.extract! project, :id, :project_owner_id, :name, :description
json.set! :members, project.members
json.set! :members_by_id, project.members.map { |member| member.id }
