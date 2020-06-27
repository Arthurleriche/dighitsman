class Api::V1::SongsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :create]
  skip_before_action :verify_authenticity_token
  def index
    songs = Song.all
    render json: SongSerializer.new(songs, option).as_json
  end

  def show
    song = Song.find(id = params[:id])
    render json: SongSerializer.new(song, option).as_json
  end

  def my_songs
    songs = Song.where(user_id: params[:id])
    render json: SongSerializer.new(songs, option).as_json
  end

  def create
    song = Song.create(song_params)

    if song.save
      render json: SongSerializer.new(song).as_json
    else
      render json: { error: song.errors.messages }, status: 422
    end
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

  def option
    @option = { include: %i[review_songs]}
  end

  def song_params
    params.require(:song).permit(:title, :description, :url, :playlist_id, :user_id, :img, :cloud)
  end
end
