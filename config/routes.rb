Rails.application.routes.draw do
  namespace :api do
    # Version 1
    namespace :v1 do
      defaults format: :json do

        namespace :users do
          post "login", to: 'sessions#login'
          patch ":id/logout", to: 'sessions#logout', as: 'logout'
        end

      end
    end
  end
end
