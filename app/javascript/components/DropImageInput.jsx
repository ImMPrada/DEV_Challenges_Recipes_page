import React from 'react';
import PropTypes from 'prop-types';
import useDirectUpload from '../hooks/useDirectUpload';

const DropImageInput = ({ name }) => {
  const {
    errors, blob, fileSrc, onFileSelect,
  } = useDirectUpload();

  return (
    <div className="drop-image-input-component">
      <input type="file" name={name} onChange={onFileSelect} />
      {fileSrc && <img className="preview-img" src={fileSrc} alt="" /> }
      <div className="instruction-text">Drag and drop an image here!</div>
    </div>
  );
};

DropImageInput.propTypes = {
  name: PropTypes.string.isRequired,
};

DropImageInput.defaultProps = {
};

export default DropImageInput;
