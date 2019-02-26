class Api::V1::UsersController < ApiController
  skip_before_action :authenticate_request!, only: :login

  def login
    authentication = Users::Authenticate.new(
      params[:email],
      params[:password]
    )

    authentication.call

    if authentication.token
      render json: { auth_token: authentication.token }
    else
      render json: { error: authentication.error }, status: :unauthorized
    end

  end
end
