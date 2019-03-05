class Api::V1::Users::SessionsController < ApiController
  skip_before_action :authenticate_request!

  # POST
  def login
    session = Users::Authenticate.new(
      params[:email],
      params[:password]
    )

    session.call

    if session.token
      render json: { auth_token: session.token }
    else
      render json: { error: session.error }, status: :unauthorized
    end

  end

  # PATCH
  def logout
    current_user.update_attributes(session_id: nil)

    render json: { head :no_content }, status: :reset_content
  end
end
