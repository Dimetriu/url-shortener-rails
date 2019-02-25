# ./services/base_build.rb
class Users::Build < BaseBuild
  def initialize(
    resource = User, **options
  )

    super(resource, **options)
  end

  def call
    resource[:verification_token] = SecureRandom.uuid
    super
  end

  def self.call(resource = User, **options)
    super
  end
end
