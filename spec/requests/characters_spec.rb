require 'rails_helper'

RSpec.describe "Characters route", type: :request do
  describe "GET /characters" do
    it "has a 200 status code" do
      get "/characters"
      expect(response.status).to eq(200)
    end
  end
end

RSpec.describe CharactersController, type: :controller do
  describe "index" do
    it "renders the 'characters/index' template" do
      get :index
      expect(response).to render_template("characters/index", "layouts/application")
    end
  end
end
