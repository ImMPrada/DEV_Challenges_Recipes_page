import React from 'react';
import InputField from '../InputField';

const RecipeDescription = () => (
  <div className="hero-text-paragraph-content">
    <InputField
      className="recipe-description-component"
      type="text"
      name="description"
      as="textarea"
      placeholder="Write some short description of your recipe" />
  </div>
);

export default RecipeDescription;
