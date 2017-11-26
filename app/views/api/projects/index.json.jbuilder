@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :project_owner_id, :name, :description
  end
end
