import { useState } from 'react';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		reset: resetEmailInput,
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput((value) => value.includes('@'));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}


	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}
		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					id='name'
					type='text'
					value={enteredName}
					onBlur={nameBlurHandler}
					onChange={nameChangeHandler}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>Email Address</label>
				<input
					id='email'
					type='email'
					value={enteredEmail}
					onBlur={emailBlurHandler}
					onChange={emailChangeHandler}
				/>
				{emailInputHasError && (
					<p className='error-text'>Please enter an email</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
