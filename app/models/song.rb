class Song < ApplicationRecord
  belongs_to :user
  belongs_to :playlist
  has_many :review_songs

  def avg_score
    review_songs.average(:score)
  end
end
