class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.integer :team_owner_id, null: false
      t.string :name, null: false, unique: true
      t.text :description, null: false
      t.timestamps
    end
    add_index :teams, :team_owner_id
  end
end
