class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score, :user_id

  belongs_to :user
  has_many :songs
end
