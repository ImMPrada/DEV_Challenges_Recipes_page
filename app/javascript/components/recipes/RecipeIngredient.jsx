import React from 'react';
import PropTypes from 'prop-types';
import IngredientListPoint from './IngredientListPoint';

const RecipeIngredient = ({ item }) => (
  <div className="recipe-ingredient-component ingredient">
    <IngredientListPoint />
    <p className="ingredient-text">
      { item.amount }
      {' '}
      { item.units }
      {' '}
      <strong>
        { item.name }
      </strong>
      {' '}
      { item.notes }
    </p>
  </div>
);

RecipeIngredient.propTypes = {
  item: PropTypes.shape({
    amount: PropTypes.string,
    units: PropTypes.string,
    name: PropTypes.string,
    notes: PropTypes.string,
  }).isRequired,
};

export default RecipeIngredient;
