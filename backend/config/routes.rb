Rails.application.routes.draw do
  resources :arts
  resources :users

  get '/arts/:id/user', to: 'arts#artmaker'
  get '/users/:id/arts', to: 'users#arts'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
