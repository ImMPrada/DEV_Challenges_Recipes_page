import React from 'react';
import PropTypes from 'prop-types';
import InstructionCounter from './InstructionCounter';

const RecipeInstruction = ({ item, index }) => (
  <div className="recipe-instruction-component instruction">
    <InstructionCounter step={index + 1} />
    <p className="instruction-content">
      { item.content }
    </p>
  </div>
);

RecipeInstruction.propTypes = {
  item: PropTypes.shape({
    step: PropTypes.number,
    content: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeInstruction;
