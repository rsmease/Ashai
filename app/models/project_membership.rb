class ProjectMembership < ApplicationRecord
  validates :project_id, :member_id, presence: true

  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id,
    primary_key: :id

  belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id,
    primary_key: :id

end
