class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :url, :playlist_id, :cloud
  belongs_to :playlist
  belongs_to :user
end
