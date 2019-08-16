Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :tracks, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :playlists, only: [:create, :index, :update, :show, :destroy]
    resources :playlistitems, :path => '/playlists/:playlist_id/tracks/:track_id', only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resources :show_episodes, only: [:index, :show]
    resources :search, only: [:index]
  end

  resources :users, only: [:new, :create, :show]

end

