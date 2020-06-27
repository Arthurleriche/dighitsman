class CreateReviewSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :review_songs do |t|
      t.integer :score
      t.string :description
      t.references :user, null: false, foreign_key: true
      t.references :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
