Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :current_user] do
        resources :playlists, only: [:index, :show, :create]
        resources :songs, only: [:index, :show, :create, :destroy]
      end
    end
  end
  get 'dighit/:id', to: 'pages#dighit', as: :dighit
  get 'dighit/:id/search', to: 'pages#dighit'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :current_user]
      resources :playlists, only: [:index, :show, :create]
      get '/:id/playlists', to: 'playlists#my_playlists'
      resources :songs, only: [:index, :show, :create, :destroy]
      get '/:id/songs', to: 'songs#my_songs'
    end
  end
  devise_for :users
  get '*path', to: 'pages#home', via: :all
end
