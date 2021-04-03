class Recipe < ApplicationRecord
  belongs_to :author
  belongs_to :category
  has_many :ingredients_packs

  has_one_attached :image

  def image_url
    image.attached? ? image.service_url : ''
  end
end
