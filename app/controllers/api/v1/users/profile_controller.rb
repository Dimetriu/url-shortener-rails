class Api::V1::Users::ProfileController < ApiController
  # POST
  def create
    user = Users::Build.new(user_params)

    if user.call
      render json: { user: user }, status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end

  end

  # PUT
  def update_password

  end

  # PUT
  def update_email

  end

  private

  def user_params
    params.permit(
      :firstname,
      :lastname,
      :email,
      :password,
      :password_confirmation
    )
  end
end
