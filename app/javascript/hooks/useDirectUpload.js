import { useState } from 'react';
import { DirectUpload } from '@rails/activestorage';

const useDirectUpload = () => {
  const [errors, setErrors] = useState(null);
  const [blob, setBlob] = useState(null);

  const { REACT_APP_ACTIVE_STORAGE_PATH } = process.env;

  const uploadFile = async (file) => {
    const upload = await new DirectUpload(file, REACT_APP_ACTIVE_STORAGE_PATH || '');

    await upload.create((error, blob) => {
      if (error) setErrors(error);
      else setBlob(blob);
    });

    return ({ blob, errors });
  };

  return {
    errors,
    blob,
    uploadFile,
  };
};

export default useDirectUpload;
