import React from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';

const InputField = ({
  type, name, placeholder, as, className,
}) => {
  const Element = as;
  const { value, onInputClick, onInputChange } = useInputValue({ initialValue: placeholder });

  return (
    <div>
      <Element
        type={type}
        name={name}
        value={value}
        className={`input-field-component ${className}`}
        onClick={onInputClick}
        onChange={onInputChange}
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(['text']).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea']),
  className: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  as: 'input',
  className: '',
};

export default InputField;
