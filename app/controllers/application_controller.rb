class ApplicationController < ActionController::Base
    before_action :authenticate_user!, only: :home
end
