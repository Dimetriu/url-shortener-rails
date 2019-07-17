Rails.application.routes.draw do
  namespace :api do
    # Version 1
    namespace :v1 do
      defaults format: :json do

        namespace :users do
          post "login", to: 'sessions#login'
          patch "logout", to: 'sessions#logout', as: 'logout'

          resource :profile,
            controller: 'profile',
            only: :create

          scope ":id" do
            patch :update_password, to: 'profile#update_password'
            patch :update_email, to: 'profile#update_email'
          end
        end

      end
    end
  end
end
