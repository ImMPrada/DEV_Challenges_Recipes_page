import { useState } from 'react';
import { DirectUpload } from '@rails/activestorage';

const useDirectUpload = () => {
  const [errors, setErrors] = useState(null);
  const [blob, setBlob] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);

  const { DIRECT_UPLOADS_PATH } = process.env;

  const uploadFile = async (file) => {
    const upload = await new DirectUpload(file, DIRECT_UPLOADS_PATH || '');

    await upload.create((error, blob) => {
      if (error) setErrors(error);
      else setBlob(blob);
    });

    return ({ blob, errors });
  };

  const readFileAsUrl = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => setFileSrc(event.target.result);
    reader.readAsDataURL(file);
  };

  const onFileSelect = (event) => {
    const { files } = event.target;
    if (!files || !files.length) return;

    uploadFile(files[0]);
    readFileAsUrl(files[0]);
  };

  return {
    errors,
    blob,
    fileSrc,
    onFileSelect,
  };
};

export default useDirectUpload;
