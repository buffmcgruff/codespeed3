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


  # Route for levels
  # /ruby/levels/1 => Level 1 for Ruby
  #   params[:language_name] = 'ruby'
  #   params[:level_number] = 1
  get '/:language_name/levels/:level_number' => 'levels#show'
end
