import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeTitle from './RecipeTitle';
import RecipeDescription from './RecipeDescription';
import RecipeImage from './RecipeImage';

const NewRecipe = () => (
  <NewRecipeForm>
    <div className="hero">
      <div className="hero-text">
        <RecipeTitle />
        <RecipeDescription />
      </div>

      <RecipeImage />
    </div>
  </NewRecipeForm>
);

export default NewRecipe;
