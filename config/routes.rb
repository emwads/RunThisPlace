 Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update, :show]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :workouts, only: [:create, :destroy, :show, :index]
    resources :run_routes, only: [:create, :show, :index, :destroy]
    resources :follows, only: [:create, :index, :destroy]
    resources :comments, only: [:create, :destroy, :index]
  end

  root "static_pages#root"
end
