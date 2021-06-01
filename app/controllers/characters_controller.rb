class CharactersController < ApplicationController
  # skip_before_action :authenticate_user!, only: [ :index ]

  def index
    user = current_user
    @characters = user.characters
    @characters_data = @characters.to_json
    @characters_path_data = characters_path.to_json
    # paths = {}
    # @characters.each do |character|
    #   paths[character] = "#{characters_path}/:#{character.id}"
    # end
    # pp paths
  end

  def show

  end
end
