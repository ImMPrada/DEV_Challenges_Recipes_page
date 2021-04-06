import React from 'react';
import CollectionGroup from '../CollectionGroup';
import RecipeIngredient from './RecipeIngredient';
import IngredientInput from './IngredientInput';

const RecipeIngredients = () => (
  <div className="the-recipe-content-ingredients">
    <h2>Ingredients</h2>

    <CollectionGroup
      CollectionMaker={IngredientInput}
      CollectionItem={RecipeIngredient}
    />
  </div>
);

export default RecipeIngredients;
