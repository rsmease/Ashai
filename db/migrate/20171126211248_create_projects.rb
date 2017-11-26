class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.integer :project_owner_id, null: false
      t.string :name, null: false, unique: true
      t.text :description
      t.timestamps
    end
    add_index :projects, :project_owner_id
  end
end
