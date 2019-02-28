Rails.application.routes.draw do
  namespace :api do
    # Version 1
    namespace :v1 do
      defaults format: :json do

        scope :users do
          # resources :sessions, only: [:create, :update]
            post "sign_in", to: 'sessions#sign_in'
            patch "sign_out/:id", to: 'sessions#sign_out'
        end

      end
    end
  end
end
