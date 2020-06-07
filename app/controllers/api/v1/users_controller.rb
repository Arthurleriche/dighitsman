class Api::V1::UsersController < ApplicationController
  def index
    users = User.all

    render json: users
  end

  def show
    user = User.find(id = params[:id])
    render json: user
  end

  def current_user
    user = current_user
    render json: user
  end
end
