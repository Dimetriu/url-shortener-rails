class Users::Build < BuildResource
  def initialize(resource = User, **options)
    super(resource, **options)
  end

  def call
    resource[:verification_token] = SecureRandom.uuid
    resource.valid? && resource.save || resource.errors
  end

  def self.call(resource = User, **options)
    self.new(resource, **options).call
  end
end
