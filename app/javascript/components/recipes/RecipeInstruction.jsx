import React from 'react';
import PropTypes from 'prop-types';
import InstructionCounter from './InstructionCounter';

const RecipeInstruction = ({ item }) => (
  <div className="recipe-instruction-component instruction">
    <InstructionCounter step={item.step} />
    <p className="instruction-text">
      { item.content }
    </p>
  </div>
);

RecipeInstruction.propTypes = {
  item: PropTypes.shape({
    step: PropTypes.number,
    content: PropTypes.string,
  }).isRequired,
};

export default RecipeInstruction;
