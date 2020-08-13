class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :landing]
  def home
    if user_signed_in?
      redirect_to dighit_path(current_user)
    end
  end

  def dighit
    if !user_signed_in?
      redirect_to root_path
    # elsif User.where(id: params[:id].to_i) != current_user
    #       redirect_to dighit_path(current_user)
    end
    if current_user.id != params[:id].to_i
      redirect_to dighit_path(current_user)
    end
  end

  def landing
  end
end
