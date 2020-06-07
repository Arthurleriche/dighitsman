class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email
  has_many :playlists
  has_many :songs, through: :playlists
end
