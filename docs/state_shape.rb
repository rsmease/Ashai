{
  entities: {
    users: {
      :name,
      :nickname,
      :password_digest,
      :session_token,
      :department_name,
      :bio
      #many to many for projects
    },
    tasks: {
      :user_id,
      :project_id,
      :task_name,
      :task_due_date,
      :task_completion_status,
      :task_description
    },
    subtasks: {
      :task_id,
      :subtask_name,
      :subtask_due_date,
      :subtask_completio_status,
      :subtask_description
    },
    :projects {
      :project_owner_id,
      :project_description
    }
  },
  sessions: {
    :session_token
    :current_user_id
  },
  root_interface: {
    :errors
    :loading
  }
}