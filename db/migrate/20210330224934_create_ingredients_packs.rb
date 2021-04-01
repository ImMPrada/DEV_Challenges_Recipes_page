class CreateIngredientsPacks < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients_packs do |t|
      t.references :recipe, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true
      t.text :notes
      t.float :amount

      t.timestamps
    end
  end
end
