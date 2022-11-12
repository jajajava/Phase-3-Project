Rails.application.routes.draw do
  resources :arts
  resources :users
  post "/auth/login", to: "auth#login"
  get "/me", to: "users#me"
end
