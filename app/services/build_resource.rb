class BuildResource
  # Resource must be a Model class
  # e.g: BuildResource(User, username: "user1")
  def initialize(resource = nil, **options)
    @resource = resource.new(**options)
  end

  protected

  attr_reader :resource
end
