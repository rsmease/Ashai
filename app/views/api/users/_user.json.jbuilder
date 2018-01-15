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

json.set! :tasks_assigned_to_user do
  json.array! user.tasks_assigned_to_user do |tasks_assigned_to_user|
    json.extract! tasks_assigned_to_user, :id, :assigner_id, :assignee_id, :title, :description, :due_date, :completion_status, :parent_task_id, :project_id
  end
end

json.set! :tasks_user_has_assigned do
  json.array! user.tasks_user_has_assigned do |tasks_user_has_assigned|
    json.extract! tasks_user_has_assigned, :id, :assigner_id, :assignee_id, :title, :description, :due_date, :completion_status, :parent_task_id, :project_id
  end
end
