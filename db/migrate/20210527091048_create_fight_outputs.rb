class CreateFightOutputs < ActiveRecord::Migration[6.1]
  def change
    create_table :fight_outputs do |t|
      t.references :fight, null: false, foreign_key: true
      t.references :character, null: false, foreign_key: true
      t.boolean :started
      t.boolean :won

      t.timestamps
    end
  end
end
