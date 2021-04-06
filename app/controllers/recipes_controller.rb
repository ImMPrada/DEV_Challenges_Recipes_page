class RecipesController < ApplicationController
  def new
  end
  def show
    if Recipe.exists?(params[:id])
      @recipe = Recipe.find(params[:id])
    else
      @recipe = 'No way!'
    end
  end
end
