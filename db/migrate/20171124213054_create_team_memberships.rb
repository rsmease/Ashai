class CreateTeamMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :team_memberships do |t|
      t.integer :member_id
      t.integer :team_id
      t.timestamps
    end
    add_index :team_memberships, :member_id
    add_index :team_memberships, :team_id
  end
end
