class IngredientsPack < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient
end
