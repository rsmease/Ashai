class Project < ApplicationRecord
  validates :project_owner_id, :name, presence: true

  belongs_to :owner,
    class_name: 'User',
    foreign_key: :project_owner_id,
    primary_key: :id

  has_many :memberships,
    class_name: 'ProjectMembership',
    foreign_key: :project_id,
    primary_key: :id

  has_many :members, through: :memberships
end
