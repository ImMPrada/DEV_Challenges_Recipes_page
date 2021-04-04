import { useState } from 'react';
import { DirectUpload } from '@rails/activestorage';

const useDirectUpload = () => {
  const [errors, setErrors] = useState(null);
  const [blob, setBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileSrc, setFileSrc] = useState(null);

  const { DIRECT_UPLOADS_PATH } = process.env;

  const uploadFile = async (file) => {
    setLoading(true);
    try {
      const upload = await new DirectUpload(file, DIRECT_UPLOADS_PATH || '');

      await upload.create((error, blob) => {
        if (error) setErrors(error);
        else setBlob(blob);

        setLoading(false);
      });

      return ({ blob, errors });
    } catch (error) {
      setErrors(error);
      setLoading(false);
    }
  };

  const readFileAsUrl = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      setFileSrc(`${event.target.result}`)
    };

    reader.readAsDataURL(file);
  };

  const onFileSelect = async (event) => {
    const { files } = event.currentTarget;
    if (!files || !files.length) return;

    await uploadFile(files[0]);
    readFileAsUrl(files[0]);
  };

  return {
    loading,
    errors,
    blob,
    fileSrc,
    onFileSelect,
  };
};

export default useDirectUpload;
