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
          <h2>Ingredients</h2>
          <div className="ingredient">
            <div className="ingredient-mark" />
            <p className="ingredient-text">
              1 and 1/2 cups
              {' '}
              <strong>graham cracker crumbs</strong>
              {' '}
              (about 10 full sheet graham crackers)
            </p>
          </div>
        </div>
        <div className="the-recipe-content-instructions" />
      </div>
    </div>
  </NewRecipeForm>
);

export default NewRecipe;
