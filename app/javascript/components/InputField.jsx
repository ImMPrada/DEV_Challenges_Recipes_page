import React from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';

const InputField = ({
  type, name, placeholder, as, className, rows,
}) => {
  const Element = as;
  const { value, onInputClick, onInputChange } = useInputValue({ initialValue: placeholder });

  return (
    <Element
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`input-field-component ${className}`}
      rows={rows}
      onFocus={onInputClick}
      onClick={onInputClick}
      onChange={onInputChange}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(['text']).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea']),
  className: PropTypes.string,
  rows: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  as: 'input',
  className: '',
  rows: '1',
};

export default InputField;
