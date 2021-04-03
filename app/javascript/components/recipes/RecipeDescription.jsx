import React from 'react';
import InputField from '../InputField';
import dotsIcon from '../../images/6dots.svg';

const RecipeDescription = () => (
  <div className="hero-text-paragraph">
    <div className="hero-text-paragraph-icon">
      <img src={dotsIcon} alt="" />
    </div>
    <div className="hero-text-paragraph-content">
      <InputField
        className="recipe-description-component"
        type="text"
        name="description"
        as="textarea"
        placeholder="Write some short description of your recipe" />
    </div>
  </div>
);

export default RecipeDescription;
