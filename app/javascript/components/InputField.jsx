import React from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';

const InputField = ({
  type, name, placeholder, as, className, rows, onChange,
}) => {
  const Element = as;
  const { value, onInputClick, onInputChange } = useInputValue({ initialValue: placeholder });
  const handleChange = (event) => {
    onInputChange(event);
    onChange(event);
  };

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
      onChange={handleChange}
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
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  placeholder: '',
  as: 'input',
  className: '',
  rows: '1',
  onChange: () => {},
};

export default InputField;
