Rails.application.routes.draw do
  namespace :api do
    # Version 1
    namespace :v1 do
      defaults format: :json do

        scope :users do
          post :login, to: 'users#login'
        end

      end
    end
  end
end
