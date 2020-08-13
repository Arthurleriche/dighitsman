class FollowSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :artist
end
