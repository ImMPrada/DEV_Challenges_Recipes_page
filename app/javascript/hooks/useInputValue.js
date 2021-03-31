import { useState, useEffect } from 'react';

const useInputValue = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [startedEdit, setStartedEdit] = useState(false);

  const onInputClick = () => { setStartedEdit(true); };
  const onInputChange = (event) => { setValue(event.target.value); };

  useEffect(() => {
    if (startedEdit) {
      setValue('');
    }
  }, [startedEdit]);

  return { value, onInputClick, onInputChange };
};

export default useInputValue;
