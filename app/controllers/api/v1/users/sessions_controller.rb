class Api::V1::Users::SessionsController < ApiController
  skip_before_action :authenticate_request!

  def sign_in
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

  def sign_out
    user = User.find(params[:id])
    user.update_attributes(session_id: nil)

    head :reset_content
  end
end
