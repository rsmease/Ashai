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

  def self.search_results(query)
    param = '%' + query.downcase + '%'
    Project.where('lower(name) LIKE ? or lower(description) LIKE ?', param, param)
      .limit(5)
  end
end
