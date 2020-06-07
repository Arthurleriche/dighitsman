class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :url, :playlist_id
  belongs_to :playlist
  belongs_to :user
end
