class Task < ApplicationRecord

  belongs_to :assigner,
    primary_key: :id,
    foreign_key: :assigner_id,
    class_name: 'User'

  belongs_to :assignee,
    primary_key: :id,
    foreign_key: :assignee_id,
    class_name: 'User',
    optional: true
    
  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'Project',
    optional: true
    
  def self.search_results(query)
    param = '%' + query.downcase + '%'
    Task.where('lower(title) LIKE ? or lower(description) LIKE ?', param, param)
      .limit(5)
  end

end
