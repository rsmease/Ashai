class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :assigner_id, null: false
      t.string :title, null: false
      t.boolean :completion_status, null: false
      t.integer :assignee_id
      t.date :due_date
      t.text :description
      t.integer :parent_task_id
      t.timestamps
    end
    add_index :tasks, :assigner_id
  end
end
