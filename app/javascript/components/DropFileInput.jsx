import React from 'react';
import PropTypes from 'prop-types';
import useDirectUpload from '../hooks/useDirectUpload';

const DropFileInput = ({ name, contentType, placeholder }) => {
  const {
    errors, blob, fileSrc, onFileSelect,
  } = useDirectUpload();

  return (
    <div className="drop-image-input-component">
      <input type="file" name={name} onChange={onFileSelect} accept={contentType} />
      {fileSrc && <img className="preview-img" src={fileSrc} alt="" /> }
      <div className="instruction-text">
        {placeholder}
      </div>
    </div>
  );
};

DropFileInput.propTypes = {
  name: PropTypes.string.isRequired,
  contentType: PropTypes.string,
  placeholder: PropTypes.string,
};

DropFileInput.defaultProps = {
  contentType: '*',
  placeholder: 'Drop your file here',
};

export default DropFileInput;
