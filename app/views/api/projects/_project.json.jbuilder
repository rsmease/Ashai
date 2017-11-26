json.extract! project, :id, :project_owner_id, :name, :description
json.set! :members, project.members
