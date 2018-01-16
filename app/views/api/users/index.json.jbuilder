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
  end
end
