class CreateFollows < ActiveRecord::Migration[6.0]
  def change
    create_table :follows do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :artist

      t.timestamps
    end
  end
end
