require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "create incomplete user" do
    ondine = User.new
    assert_not ondine.save
  end

  test "create user" do
    ondine = User.new(email: "ondine@example.org", password: "ondine@example.org")
    assert ondine.save
  end
end
