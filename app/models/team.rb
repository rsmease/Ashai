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
end
