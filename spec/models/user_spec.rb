require 'rails_helper'

RSpec.describe User, type: :model do
  context "when we don't have users yet" do
    it 'creates a user' do
      ondine = User.new(email: "ondine@example.org", password: "ondinepassword")
      expect(ondine.save).to eq(true)
    end
  end

end
