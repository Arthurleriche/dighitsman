class CreatePlaylists < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists do |t|
      t.string :name
      t.integer :score
      t.belongs_to :user, null: false, foreign_key: true
      t.references :songs, foreign_key: true

      t.timestamps
    end
  end
end
