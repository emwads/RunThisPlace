# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160706224526) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id"
    t.integer  "workout_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["workout_id"], name: "index_comments_on_workout_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "follows", ["follower_id", "followee_id"], name: "index_follows_on_follower_id_and_followee_id", unique: true, using: :btree

  create_table "run_routes", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "author_id",   null: false
    t.text     "map_info",    null: false
    t.float    "distance"
    t.text     "route_path"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "run_routes", ["author_id"], name: "index_run_routes_on_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "name"
    t.date     "birthdate"
    t.string   "picture_url",     null: false
    t.float    "weight"
    t.integer  "height"
    t.string   "email",           null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "workouts", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.string   "workout_type", null: false
    t.integer  "run_route_id"
    t.string   "title",        null: false
    t.text     "description"
    t.integer  "calories"
    t.float    "distance"
    t.date     "date"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "workouts", ["run_route_id"], name: "index_workouts_on_run_route_id", using: :btree
  add_index "workouts", ["user_id"], name: "index_workouts_on_user_id", using: :btree

end
