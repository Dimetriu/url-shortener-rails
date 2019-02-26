class ApiController < ActionController::API
  attr_reader :current_user

  before_action :authenticate_request!

  private

  def authenticate_request!
    authorization = AuthorizeApiRequest.new(request.headers)
    @current_user = authorization.call

    return @current_user if @current_user

    render json: { error: authorization.error }, status: :unauthorized
  end
end
