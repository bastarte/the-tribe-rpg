require "test_helper"

class CharacterTest < ActiveSupport::TestCase
  test "create incomplete character" do
    bulbi = Character.new
    assert_not bulbi.save
  end

  test "create ok character" do
    bulbi = Character.new(user: users(:ondine))
    assert bulbi.save
  end

  test "character has default next_time" do
    bulbi = Character.new(user: users(:ondine))
    bulbi.save
    assert bulbi.next_time
  end
end
