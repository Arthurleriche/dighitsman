class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home
  def home
    if user_signed_in?
      redirect_to dighit_path(current_user)
    end
  end

  def dighit
    if !user_signed_in?
      redirect_to root_path
    end
  end
end
