import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';
import InstructionCounter from './InstructionCounter';

const InstructionInput = ({ onChange, index }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    onChange({ content });
  }, [content]);

  return (
    <div className="instruction-input-component">
      <InstructionCounter step={index + 1} />
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
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default InstructionInput;
