class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.references :author, null: false, foreign_key: true
      t.text :name
      t.string :image
      t.text :intro
      t.integer :lot
      t.float :prep_time
      t.float :cook_time
      t.text :instructions
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
