Rails.application.routes.draw do
  root 'home#index'
  devise_for :users

  resources :languages, only: [:index, :show] do
    resources :problems, only: [:show]
  end
  resources :progresses, only: [:create], defaults: { format: :json }

end
