import React from 'react';
import DropFileInput from '../DropFileInput';

const RecipeImage = () => (
  <div className="hero-img">
    <DropFileInput
      name="recipe[image]"
      contentType="image/*"
      placeholder="Drag and drop an image here!"
    />
  </div>
);

export default RecipeImage;
