import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeTitle from './RecipeTitle';
import RecipeDescription from './RecipeDescription';
import dotsIcon from '../../images/6dots.svg';
import recipeImage from '../../images/photo1.png';

const NewRecipe = () => (
  <NewRecipeForm>
    <div className="hero">
      <div className="hero-text">
        <RecipeTitle />
        <div className="hero-text-paragraph">
          <div className="hero-text-paragraph-icon">
            <img src={dotsIcon} alt="" />
          </div>
          <RecipeDescription />
        </div>
      </div>
      <div className="hero-img">
        <img src={recipeImage} alt="recipe" />
      </div>
    </div>
  </NewRecipeForm>
);

export default NewRecipe;
