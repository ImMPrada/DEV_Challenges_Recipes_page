import React from 'react'
import PropTypes from 'prop-types'

const InstructionCounter = ({ step }) => (
  <div className="instruction-counter-component">
    { step }
  </div>
);

InstructionCounter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default InstructionCounter;
