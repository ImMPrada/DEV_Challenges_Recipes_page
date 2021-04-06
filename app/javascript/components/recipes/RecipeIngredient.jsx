import React from 'react';

const RecipeIngredient = ({ item }) => (
  <div className="ingredient">
    <div className="ingredient-mark" />
    <p className="ingredient-text">
      { item.text }
      {/* 1 and 1/2 cups
      {' '}
      <strong>graham cracker crumbs</strong>
      {' '}
      (about 10 full sheet graham crackers) */}
    </p>
  </div>
);

export default RecipeIngredient;
