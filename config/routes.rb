Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :user_searches, only: [:index]
    resources :teams
    resources :projects
    resources :team_memberships, only: [:create, :show, :destroy]
    resource :session, only: [ :new, :create, :destroy ]
  end

end
