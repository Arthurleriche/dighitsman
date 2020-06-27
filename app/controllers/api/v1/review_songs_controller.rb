class Api::V1::ReviewSongsController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!, only: [:index, :show, :create]
  def index
    reviews = ReviewSong.all
    render json: reviews
  end

  def show
    reviews = ReviewSong.where(song_id: params[song_id])

  render json: SongSerializer.new(reviews).as_json
  end


  def create
    review_song = ReviewSong.new(reviews_params)
    if review_song.save
      render json: review_song
    else
      render json: { error: review_song.errors.messages}, status: 422
    end
  end

  private

  def reviews_params
    params.require(:review_song).permit(:description, :score, :user_id, :song_id)
  end
end
