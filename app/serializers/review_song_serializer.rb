class ReviewSongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :score
end
