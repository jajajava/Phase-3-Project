# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_24_180334) do

  create_table "arts", force: :cascade do |t|
    t.string "title"
    t.string "medium"
    t.integer "year_created"
    t.text "description"
    t.integer "price"
    t.string "art_url"
    t.string "tags"
    t.boolean "negotiable"
    t.integer "user_id"
  end

  create_table "bids", force: :cascade do |t|
    t.string "bid_name"
    t.string "bid_email"
    t.integer "bid_amount"
    t.text "bid_comments"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.boolean "isArtist"
    t.string "profile_picture"
    t.text "artist_bio"
  end

end
