import React from 'react';

const IngredientInput = ({ item, onChange }) => (
  <div>
    <input value={item.text || ''} onChange={(event) => { onChange({ text: event.target.value }); }} />
  </div>
);

export default IngredientInput;
