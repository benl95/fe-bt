const main = () => {
	const form = document.querySelector('#register');

	form.addEventListener('input', e => {
		if (e.target.type !== 'submit') {
			localStorage.setItem(e.target.name, e.target.value);
		}
	});

	window.addEventListener('load', loadInput);
};

const loadInput = () => {
	let inputFields = document.querySelectorAll('form input');

	inputFields.forEach(input => {
		let userInput = localStorage.getItem(input.name);
		if (userInput) {
			if (input.type === 'radio' && input.value === userInput) {
				input.checked = true;
			} else if (input.type !== 'radio') {
				input.value = userInput;
			}
		}
	});
};

const formValidation = () => {
	const emailInput = document.querySelector('#email');
	const emailError = document.querySelector('#email + span.email-error');
	const nameInput = document.querySelector('#name');
	const nameError = document.querySelector('#name + #name-error');

	emailInput.addEventListener('change', () => {
		if (emailInput.validity.valid) {
			emailError.textContent = '';
			emailError.className = 'error';
		} else {
			showEmailError();
		}
	});

	nameInput.addEventListener('change', () => {
		if (nameInput.validity.valid) {
			nameError.textContent = '';
			nameError.className = 'error';
		} else {
			showNameError();
		}
	});
};

// TODO:

const showBirthdayError = () => {
	// Check if string contains '/'
	// Check if string isn't empty
	// Check if maxLength is reached
	// Check if format is in dd/mm/yyyy
};

const showSexError = () => {
	// Check if option is selected
};

const showOrientationError = () => {
	// Check if options is selected
};

const showPasswordError = () => {
	// Check if string is minLength
	// Check if string has reached maxLength
	// Check if string passes regex
};

const showNameError = () => {
	const nameInput = document.querySelector('#name');
	const nameError = document.querySelector('#name + #name-error');

	if (nameInput.validity.tooShort) {
		nameError.textContent = `Atleast ${nameInput.minlength} characters`;
	} else if (nameInput.validity.tooLong) {
		nameError.textContent = `Maxium of ${nameInput.maxlength} characters reached`;
	} else if (nameInput.validity.valueMissing) {
		nameError.textContent = 'Please provide your name';
	}

	nameError.className = 'error active';
};

const showEmailError = () => {
	const emailError = document.querySelector('#email + span.email-error');

	if (emailInput.validity.valueMissing) {
		emailError.textContent = 'You need to enter an e-mail address.';
	} else if (emailInput.validity.typeMismatch) {
		emailError.textContent = 'This is not an e-mail address';
	} else if (emailInput.validity.tooShort) {
		emailError.textContent = `E-mail address should be atleast ${email.minlength} characters`;
	}

	emailError.className = 'error active';
};

main();
formValidation();
