 Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resources :users, only: [:show, :index]
    resource :session, only: [:create, :destroy]
    resources :workouts, only: [:create, :destroy, :show, :index]
    resources :run_routes, only: [:create, :show, :index, :destroy]
  end

  root "static_pages#root"
end
