class Team < ApplicationRecord
  validates :team_owner_id, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :owner,
    class_name: 'User',
    foreign_key: :team_owner_id,
    primary_key: :id

  has_many :memberships,
    class_name: 'TeamMembership',
    foreign_key: :team_id,
    primary_key: :id

  has_many :members, through: :memberships

  def self.search_results(query)
    param = '%' + query.downcase + '%'
    Team.where('lower(name) LIKE ? or lower(description) LIKE ?', param, param)
      .limit(5)
  end
end
