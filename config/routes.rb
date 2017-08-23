Rails.application.routes.draw do
  
  devise_for :users,controllers: {
           :sessions => "users/sessions",
            }, :skip => [:registrations] 
as :user do
  get 'users/edit' => 'devise/registrations#edit', :as => 'edit_user_registration'
  put 'users' => 'devise/registrations#update', :as => 'user_registration'
end
  
  
  get '/welcome', to: 'welcome#index'
  get '/about', to: 'pages#about'
  get '/home', to: 'pages#home' 
  get  '/signup',  to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
   root 'researches#index'
resources :researches do
  get :search, on: :collection
  get :paging, on: :collection
end

  resources :users do
      get :paging, on: :collection      
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
end
