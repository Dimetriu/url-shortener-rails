# ./services/base_build.rb
class Users::Build < BaseBuild
  def initialize(resource = User, **options)
    super(resource, **options)
  end

  def call
    resource[:verification_token] = SecureRandom.uuid
    resource[:session_id] = SecureRandom.uuid
    # Saving User if valid
    super
    # Logging in User
    JsonWebToken.encode(session_id: resource.session_id)
  end
end
