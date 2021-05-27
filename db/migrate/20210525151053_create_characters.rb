class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :rank
      t.datetime :next_time
      t.integer :skill
      t.integer :attack
      t.integer :defense
      t.integer :magic
      t.integer :health
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
