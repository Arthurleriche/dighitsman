class Api::V1::PlaylistsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :create]
  skip_before_action :verify_authenticity_token
  def index
    playlists = Playlist.all
    render json: PlaylistSerializer.new(playlists).as_json
  end

  def my_playlists
    playlists = Playlist.where(user_id: params[:id])
    render json: PlaylistSerializer.new(playlists).as_json
  end

  def user_playlist
    user = current_user
    render json: user
  end

  def show
    playlist = Playlist.find(id = params[:id])
    render json: PlaylistSerializer.new(playlist).as_json
  end

  def create
    playlist = Playlist.create(playlist_params)

    if playlist.save
      render json: PlaylistSerializer.new(playlist).as_json
    else
      render json: { error: playlist.errors.messages }, status: 422
    end
  end


  private

  def playlist_params
    params.require(:playlist).permit(:name, :score, :user_id)
  end
end
