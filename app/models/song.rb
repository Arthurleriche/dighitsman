class Song < ApplicationRecord
  belongs_to :playlist
  has_many :usersongs
end
