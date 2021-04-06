import React from 'react';

const IngredientInput = ({ item, onChange }) => (
  <div className="ingredient-input-component">
    <input value={item.text || ''} onChange={(event) => { onChange({ text: event.target.value }); }} />
  </div>
);

export default IngredientInput;
