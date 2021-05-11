import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';

const IngredientInput = ({ onChange }) => {
  const [amount, setAmount] = useState('');
  const [units, setUnits] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    onChange({ name, units, amount, notes });
  }, [name, units, amount, notes]);

  return (
    <div className="ingredient-input-component">
      <InputField
        className="ingredient-pack-amount"
        type="text"
        name="ingredient_pack[amount]"
        placeholder="amount"
        onChange={(event) => setAmount(event.target.value)}
      />
      <InputField
        className="ingredient-units"
        type="text"
        name="ingredient[units]"
        placeholder="units"
        onChange={(event) => setUnits(event.target.value)}
      />
      <InputField
        className="ingredient-name"
        type="text"
        name="ingredient[name]"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <InputField
        className="ingredient-pack-notes"
        type="text"
        name="ingredient_pack[notes]"
        placeholder="additional notes"
        onChange={(event) => setNotes(event.target.value)}
      />
    </div>
  );
};

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
