Rails.application.routes.draw do
  resources :users , only:[:show,:index,:create]
  resources :reviews
  resources :gyms 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
  # Defines the root path route ("/")
  # root "articles#index"
end
