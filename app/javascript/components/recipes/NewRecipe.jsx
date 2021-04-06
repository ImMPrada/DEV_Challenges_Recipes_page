import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeTitle from './RecipeTitle';
import RecipeDescription from './RecipeDescription';
import RecipeImage from './RecipeImage';
import RecipeDetailsCard from './RecipeDetailsCard';

const NewRecipe = () => (
  <NewRecipeForm>
    <div className="hero">
      <div className="hero-text">
        <RecipeTitle />
        <RecipeDescription />
      </div>
      <RecipeImage />
    </div>

    <div className="the-recipe">
      <div className="the-recipe-info-card-big">
        <RecipeDetailsCard />
      </div>
      <div className="the-recipe-content">
        <div className="the-recipe-content-ingredients">
          <h3>Ingredients</h3>
          <div className="the-recipe-content-ingredients-item">
            <h2 className="the-item">
              Graham Cracker Crust
            </h2>

            <div className="checkbox">
              <div className="checkbox-text">
                <p>1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)</p>
              </div>
            </div>

          </div>
        </div>
        <div className="the-recipe-content-instructions" />
      </div>
    </div>
  </NewRecipeForm>
);

export default NewRecipe;
