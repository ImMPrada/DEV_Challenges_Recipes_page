import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import InstructionCounter from './InstructionCounter';

const InstructionInput = ({ onChange }) => {
  const [step, setStep] = useState(1);
  const [content, setContent] = useState('');

  useEffect(() => {
    onChange({ content, step });
  }, [content, step]);

  return (
    <div className="instruction-input-component">
      <InstructionCounter step={step} />
      <InputField
        className="instruction-content"
        as="textarea"
        type="text"
        name="instruction[content]"
        placeholder="Instruction Details"
        onChange={(event) => setContent(event.target.value)}
      />
    </div>
  );
};

InstructionInput.propTypes = {
  onChange: PropTypes.func,
};

InstructionInput.defaultProps = {
  onChange: () => {},
};

export default InstructionInput;
