class Task < ApplicationRecord
  validates :title, :assigner_id, :completion_status, presence: true

  belongs_to :assigner,
    primary_key: :id,
    foreign_key: :assigner_id,
    class_name: 'User'

  belongs_to :assignee,
    primary_key: :id,
    foreign_key: :assignee_id,
    class_name: 'User'

  
end
