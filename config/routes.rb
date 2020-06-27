Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'review_songs/show'
    end
  end
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
  get 'dighit/:id/video', to: 'pages#dighit'
  get 'dighit/:id/landing', to: 'pages#dighit'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :current_user]
      resources :playlists, only: [:index, :show, :create, :destroy]
      get '/:id/playlists', to: 'playlists#my_playlists'
      resources :songs, only: [:index, :show, :create, :destroy] do
    end
    resources :review_songs, only: [:index, :show, :create]
      get '/:id/songs', to: 'songs#my_songs'
    end
  end
  devise_for :users
  get '*path', to: 'pages#home', via: :all
end
