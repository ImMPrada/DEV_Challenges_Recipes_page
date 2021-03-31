import React from 'react';
import InputField from '../InputField';

const RecipeTitle = () => (
  <InputField
    className="recipe-title-component hero-text-title"
    type="text"
    name="title"
    placeholder="Your awesome recipe name" />
);

export default RecipeTitle;
