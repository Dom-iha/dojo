import useForm from '../hooks/useForm';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = () => {
	const {
		reset: resetFirstName,
		value: enteredFirstName,
		hasError: firstNameHasError,
		valueIsValid: firstNameIsValid,
		inputBlurHandler: firstNameBlurHandler,
		valueChangeHandler: firstNameChangeHandler,
	} = useForm(isNotEmpty);

	const {
		reset: resetLastName,
		value: enteredLastName,
		hasError: lastNameHasError,
		valueIsValid: lastNameIsValid,
		inputBlurHandler: lastNameBlurHandler,
		valueChangeHandler: lastNameChangeHandler,
	} = useForm(isNotEmpty);

	const {
		reset: resetEmail,
		value: enteredEmail,
		hasError: emailHasError,
		valueIsValid: emailIsValid,
		inputBlurHandler: emailBlurHandler,
		valueChangeHandler: emailChangeHandler,
	} = useForm(isEmail);

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const handleFormValidity = (e) => {
		e.preventDefault();
		if (!formIsValid) {
			return;
		}

		resetFirstName();
		resetLastName();
		resetEmail();
	};
	const firstNameClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';
	const lastNameClasses = lastNameHasError
		? 'form-control invalid'
		: 'form-control';
	const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={handleFormValidity}>
			<div>
				<div  className={firstNameClasses}>
					<label htmlFor='firstname'>First Name</label>
					<input
						type='text'
						id='firstname'
						value={enteredFirstName}
						onBlur={firstNameBlurHandler}
						onChange={firstNameChangeHandler}
					/>
					{firstNameHasError && <p className='error-text'>Please enter your first Name</p>}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor='lastname'>Last Name</label>
					<input
						type='text'
						id='lastname'
						value={enteredLastName}
						onBlur={lastNameBlurHandler}
						onChange={lastNameChangeHandler}
					/>
					{lastNameHasError && <p className='error-text'>Please enter your last Name</p>}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='email'
					id='email'
					value={enteredEmail}
					onBlur={emailBlurHandler}
					onChange={emailChangeHandler}
				/>
				{emailHasError && <p className='error-text'>Please enter an email address</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
