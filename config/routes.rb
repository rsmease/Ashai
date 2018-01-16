Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :user_searches, only: [:index]

    resources :teams
    resources :team_searches, only: [:index]
    resources :team_memberships, only: [:create, :show, :destroy]

    resources :projects
    resources :project_searches, only: [:index]
    resources :project_memberships, only: [:create, :show, :destroy]

    resources :tasks
    resources :task_searches, only: [:index]

    resource :session, only: [ :new, :create, :destroy ]
  end

end
