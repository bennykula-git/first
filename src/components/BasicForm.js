import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    isEnteredValueValid: isFirstNameValid,
    invalidEnteredValue: invalidFirstName,
    valueInputChangedHandler: firstNameChangedHandler,
    enteredValueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((v) => v.trim() !== '');

  const {
    enteredValue: lastName,
    isEnteredValueValid: isLastNameValid,
    invalidEnteredValue: invalidLastName,
    valueInputChangedHandler: lastNameChangedHandler,
    enteredValueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((v) => v.trim() !== '');

  const {
    enteredValue: email,
    isEnteredValueValid: isEmailValid,
    invalidEnteredValue: invalidEmail,
    valueInputChangedHandler: emailChangedHandler,
    enteredValueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((v) => /\S+@\S+\.\S+/.test(v));

  const isValidForm = isEmailValid && isLastNameValid && isFirstNameValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isValidForm) {
      return;
    }

    resetEmail();
    resetFirstName();
    resetLastName();
  };

  const firstNameClassName = invalidFirstName
    ? 'form-control invalid input'
    : 'form-control';
  const lastNameClassName = invalidLastName
    ? 'form-control invalid input'
    : 'form-control';
  const emailClassName = invalidEmail ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClassName}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            value={firstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
          {invalidFirstName && (
            <p className='error-text'>First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameClassName}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            value={lastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {invalidLastName && (
            <p className='error-text'>Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {invalidEmail && <p className='error-text'>Please enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
