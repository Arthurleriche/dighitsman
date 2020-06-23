class AddCloudToSong < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :cloud, :string
  end
end
