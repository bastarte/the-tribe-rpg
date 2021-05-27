require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "get home" do
    get "/"
    assert_response :success
  end
end
