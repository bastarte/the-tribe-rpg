require 'rails_helper'

RSpec.describe Character, type: :model do

  context "when a user exists" do
    before(:example) do
      @ondine = User.new(email: "ondine@example.org", password: "ondinepassword")
    end

    it 'it is possible to create a character' do
      bulbi = Character.new(user: @ondine)
      expect(bulbi.save).to eq(true)
    end
  end

  context "when a character is created" do
    before(:example) do
      @ondine = User.new(email: "ondine@example.org", password: "ondinepassword")
      @bulbi = Character.create!(user: @ondine)
    end

    it 'next_time is populated by default' do
      expect(@bulbi.next_time).to be_truthy
    end

    it 'is possible to update its skills' do
      expect(@bulbi.update(name: "bulbizare", attack: 2, defense: 3, magic: 4, health: 5)).to eq(true)
    end
  end
end
