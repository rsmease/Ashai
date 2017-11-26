class CreateProjectMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :project_memberships do |t|
      t.integer :member_id
      t.integer :project_id
      t.timestamps
    end
    add_index :project_memberships, :member_id
    add_index :project_memberships, :project_id
  end
end
