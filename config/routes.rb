Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'follow/create'
      get 'follow/show'
      get 'follow/index'
      get 'follow/destroy'
    end
  end
  get 'follows/create'
  get 'follows/show'
  get 'follows/index'
  get 'follows/destroy'
  root 'pages#home'
  namespace :api do
    namespace :v1 do
      get '/current_user', to: "users#current_user"
      resources :users, only: [:index, :show] do
        resources :playlists, only: [:index, :show, :create]
        resources :songs, only: [:index, :show, :create, :destroy]
      end
    end
  end

  get 'dighit/:id/landing', to: 'pages#dighit', as: :dighit
  get 'dighit/:id/search', to: 'pages#dighit'
  get 'dighit/:id/video', to: 'pages#dighit'
  get 'dighit/:id/find/:findId',to: 'pages#dighit'

  get '/landing', to: 'pages#landing'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :current_user]
      resources :playlists, only: [:index, :show, :create, :destroy]
      get '/:id/playlists', to: 'playlists#my_playlists'
      resources :songs, only: [:index, :show, :create, :destroy]
    resources :review_songs, only: [:index, :show, :create]
      get '/:id/songs', to: 'songs#my_songs'
    end
  end
  namespace :api do
    namespace :v1 do
      get '/playlists/:playlist_id/songs', to: 'songs#song_of_playlist'
    end
  end

  namespace :api do
    namespace :v1 do
      resources :follow, only: [:create, :show, :index, :destroy]
    end
  end

  devise_for :users
  get '*path', to: 'pages#home', via: :all
end
