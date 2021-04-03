import React from 'react';
import PropTypes from 'prop-types';
import useDirectUpload from '../hooks/useDirectUpload';

const DropImageInput = ({ name }) => {
  const { errors, blob, onInputChange } = useDirectUpload();

  return (
    <div className="drop-image-input-component">
      <input type="file" name={name} onChange={onInputChange} />
    </div>
  );
};

DropImageInput.propTypes = {
  name: PropTypes.string.isRequired,
};

DropImageInput.defaultProps = {
};

export default DropImageInput;
