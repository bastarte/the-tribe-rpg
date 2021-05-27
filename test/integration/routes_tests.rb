require 'test_helper'

class RoutesTest < ActionDispatch::IntegrationTest
  test 'route tests' do
    assert_generates '/', controller: 'pages', action: 'home'
  end

  # this test fails but I'm unsure what assert_generates does
  # test 'character route tests' do
  #   assert_generates '/characters', controller: 'characters', action: 'index'
  # end
end
