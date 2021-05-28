class CharactersController < ApplicationController
  # skip_before_action :authenticate_user!, only: [ :index ]

  def index
    user = current_user
    @characters = user.characters
    @characters_json = @characters.to_json
  end
end
