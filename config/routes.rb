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
  get 'dighit/:id/playlist', to: 'pages#dighit'
  get 'dighit/:id/Users', to: 'pages#dighit'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :current_user]
      resources :playlists, only: [:index, :show, :create]
      get '/:id/playlists', to: 'playlists#my_playlists'
      resources :songs, only: [:index, :show, :create, :destroy]
    end
  end
  devise_for :users
end
