Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root path
  root 'pages#index'

  # routes for login, lougout, and checking if a user is logged in
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  # routes for pets
  post '/addpet', to: 'pets#create'
  get '/mypets', to: 'pets#mypets'
  delete '/mypets', to: 'pets#destroy'
  patch '/updatepet', to: 'pets#update'

  # resources for users - only allow create, show one, or show all. No edit or delete.
  resources :users, only: [:create, :show, :index]

  # resources for pets - no limitations
  resources :pets

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
