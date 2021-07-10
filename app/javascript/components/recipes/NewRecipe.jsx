import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeTitle from './RecipeTitle';
import RecipeDescription from './RecipeDescription';
import RecipeImage from './RecipeImage';
import RecipeDetailsCard from './RecipeDetailsCard';
import RecipeIngredients from './RecipeIngredients';
import RecipeInstructions from './RecipeInstructions';

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
        <RecipeIngredients />
        <RecipeInstructions />
      </div>
    </div>
  </NewRecipeForm>
);

export default NewRecipe;
