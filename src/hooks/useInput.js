import { useState } from 'react';

const useInput = (validationFunction) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const isEnteredValueValid = validationFunction(enteredValue);
  const invalidEnteredValue = !isEnteredValueValid && enteredValueIsTouched;

  const valueInputChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const enteredValueBlurHandler = (e) => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setEnteredValueIsTouched(false);
  };

  return {
    enteredValue,
    isEnteredValueValid,
    invalidEnteredValue,
    valueInputChangedHandler,
    enteredValueBlurHandler,
    reset,
  };
};

export default useInput;
