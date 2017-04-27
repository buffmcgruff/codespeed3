Rails.application.routes.draw do
	
  devise_for :users
  resources :codespeed3
  root to: "post#index"
end
