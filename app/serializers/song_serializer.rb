class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :url, :playlist_id, :cloud, :avg_score, :img, :created_at
  belongs_to :playlist
  belongs_to :user
  has_many :review_songs
end
