import React from 'react';
import DropImageInput from '../DropImageInput';

const RecipeImage = () => (
  <div className="hero-img">
    <DropImageInput name="recipe[image]" />
  </div>
);

export default RecipeImage;
