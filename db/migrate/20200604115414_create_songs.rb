class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :description
      t.integer :score
      t.string :url
      t.belongs_to :playlist, null: false, foreign_key: true
      t.timestamps
    end
  end
end
