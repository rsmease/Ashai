class TeamMembership < ApplicationRecord
  validates :team_id, :member_id, presence: true

  belongs_to (:member,
    class_name: 'User',
    foreign_key: :member_id,
    primary_key: :id)

  belongs_to (:team,
    class_name: 'Team',
    foreign_key: :team_id,
    primary_key: :id)
    
end
