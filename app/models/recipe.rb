class Recipe < ApplicationRecord
  belongs_to :author
  belongs_to :category
  has_many :ingredients_packs
end
