Rails.application.routes.draw do
  namespace :api do
    # Version 1
    namespace :v1 do
      defaults format: :json do

        # Resolves Authentication
        namespace :users do
          post "login", to: 'sessions#login'
          resource :profile, controller: 'profile', only: :create

          scope ":id" do
            patch "logout", to: 'sessions#logout', as: 'logout'
            put :update_password, to: 'profile#update_password'
            put :update_email, to: 'profile#update_email'
          end
        end

      end
    end
  end
end
