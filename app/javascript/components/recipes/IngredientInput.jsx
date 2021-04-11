import React from 'react';
import PropTypes from 'prop-types';

const IngredientInput = ({ item, onChange }) => (
  <div className="ingredient-input-component">
    <input value={item.text || ''} onChange={(event) => onChange({ text: event.target.value })} />
  </div>
);

IngredientInput.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
};

IngredientInput.defaultProps = {
  onChange: () => {},
};

export default IngredientInput;
