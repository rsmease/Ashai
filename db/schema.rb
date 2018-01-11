# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180111144032) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "project_memberships", force: :cascade do |t|
    t.integer "member_id"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_project_memberships_on_member_id"
    t.index ["project_id"], name: "index_project_memberships_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "project_owner_id", null: false
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_owner_id"], name: "index_projects_on_project_owner_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "assigner_id", null: false
    t.string "title", null: false
    t.boolean "completion_status", null: false
    t.integer "assignee_id"
    t.date "due_date"
    t.text "description"
    t.integer "parent_task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assigner_id"], name: "index_tasks_on_assigner_id"
  end

  create_table "team_memberships", force: :cascade do |t|
    t.integer "member_id"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id"], name: "index_team_memberships_on_member_id"
    t.index ["team_id"], name: "index_team_memberships_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.integer "team_owner_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_owner_id"], name: "index_teams_on_team_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.text "bio"
    t.string "profile_image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
