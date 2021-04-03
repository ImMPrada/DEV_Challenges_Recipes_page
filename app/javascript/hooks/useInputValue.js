import { useState } from 'react';

const useInputValue = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [startedEdit, setStartedEdit] = useState(false);

  const onInputClick = (event) => { 
    if (startedEdit) return;

    event.target.select();
    setStartedEdit(true);
  };

  const onInputChange = (event) => {
    if (!startedEdit) setStartedEdit(true);
    setValue(event.target.value);
  };

  return { value, onInputClick, onInputChange };
};

export default useInputValue;
