Rails.application.routes.draw do
  resources :items
  resources :categories
  resources :menus
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/menus/:menu_id/categeries/:id', to: 'categories#add_to_menu'
  get '/menus/:menu_id/categories/:category_id/items/:id', to: 'items#add_to_category'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
