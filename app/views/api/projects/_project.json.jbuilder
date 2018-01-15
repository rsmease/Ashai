json.extract! project, :id, :project_owner_id, :name, :description
json.set! :members, project.members
json.set! :members_by_id, project.members.map { |member| member.id }

json.set! :tasks do
  json.array! project.tasks do |tasks|
    json.extract! task, :id, :assigner_id, :assignee_id, :title, :description, :due_date, :completion_status, :parent_task_id, :project_id
  end
end