class Api::V1::SongsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :create]
  skip_before_action :verify_authenticity_token
  def index
    songs = Song.all
    render json: songs
  end

  def show
    song = Song.find(id = params[:id])
    render json: song
  end

  def my_songs
    songs = Song.where(user_id: params[:id])
    render json: songs
  end

  def create
    song = Song.create(song_params)

    if song.save
      render json: SongSerializer.new(song).as_json
    else
      render json: { error: song.errors.messages }, status: 422
    end
  end

  def song_cloudinary
    Cloudinary::Api.resources

      # :cloud_name => "dighists",
      # :api_key => "675944252314953",
      # :api_secret => "oWH5VzqbJufxmC0Z6TtVq45brMQ"
  end

  def destroy
    song = Song.find(id = params[:id])

    if song.destroy
      head :no_content
    else
      render json: {error: song.errors.messages}, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :description, :score, :url, :playlist_id, :user_id, :img)
  end
end
