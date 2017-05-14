Rails.application.routes.draw do
	
  devise_for :users

  # List of all levels
  root to: "coding_languages#index"

  get '/levels' => 'levels#index'
  get '/levels/:id' => 'levels#show'

  get '/coding_languages' => "coding_languages#index"
  get '/coding_languages/:id' => "coding_languages#show"
  
  post '/results' => "results#show"
 
  get '/contact' => "users#contact"
end
