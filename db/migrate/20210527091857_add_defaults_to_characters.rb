class AddDefaultsToCharacters < ActiveRecord::Migration[6.1]
  def change
    change_column_default :characters, :rank, from: nil, to: 1
    change_column_default :characters, :skill, from: nil, to: 12
    change_column_default :characters, :attack, from: nil, to: 0
    change_column_default :characters, :defense, from: nil, to: 0
    change_column_default :characters, :magic, from: nil, to: 0
    change_column_default :characters, :health, from: nil, to: 10
  end
end
