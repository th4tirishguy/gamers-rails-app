class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :system
      t.string :name
      t.string :country
      t.boolean :microphone
      t.text :description

      t.timestamps null: false
    end
  end
end
