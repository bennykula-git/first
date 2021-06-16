// import { useState } from 'react';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    valueInputChangedHandler: nameInputChangedHandler,
    enteredValueBlurHandler: enteredNameBlurHandler,
    isEnteredValueValid: isEnteredNameValid,
    invalidEnteredValue: invalidEnteredName,
    reset: resetName,
  } = useInput((v) => v.trim() !== '');

  const {
    enteredValue: enteredEmail,
    valueInputChangedHandler: emailInputChangedHandler,
    enteredValueBlurHandler: enteredEmailBlurHandler,
    isEnteredValueValid: isEnteredEmailValid,
    invalidEnteredValue: invalidEnteredEmail,
    reset: resetEmail,
  } = useInput((v) => /\S+@\S+\.\S+/.test(v));

  const isFormValid = isEnteredNameValid && isEnteredEmailValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    resetName();
    resetEmail();
  };

  const nameInputClassName = invalidEnteredName
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClassName = invalidEnteredEmail
    ? 'form-control invalid'
    : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangedHandler}
          value={enteredName}
          onBlur={enteredNameBlurHandler}
        />
        {invalidEnteredName && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClassName}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangedHandler}
          onBlur={enteredEmailBlurHandler}
          value={enteredEmail}
        ></input>
        {invalidEnteredEmail && (
          <p className='error-text'>Please enter valid email address</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
