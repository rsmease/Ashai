@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :project_id, :assignee_id
  end
end