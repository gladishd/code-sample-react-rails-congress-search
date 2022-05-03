Rails.application.routes.draw do
  get '/get_districts' => 'districts#get_districts'

  resources :districts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
