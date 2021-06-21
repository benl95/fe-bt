const main = () => {
	const form = document.querySelector('#register');

	form.setAttribute('novalidate', true);

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
	const emailError = document.querySelector('#email + #email-error');
	const nameInput = document.querySelector('#name');
	const nameError = document.querySelector('#name + #name-error');
	const birthdayInput = document.querySelector('#birthday');
	const birthdayError = document.querySelector('#birthday + #birthday-error');
	const passwordInput = document.querySelector('#password');
	const passwordError = document.querySelector('#password + #password-error');

	passwordInput.addEventListener('change', () => {
		if (passwordInput.validity.valid) {
			passwordError.textContent = '';
			passwordError.className = 'error';
		} else {
			showPasswordError();
		}
	});

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

	birthdayInput.addEventListener('change', () => {
		if (birthdayInput.validity.valid) {
			birthdayError.textContent = '';
			birthdayError.className = 'error';
		} else {
			showBirthdayError();
		}
	});
};

const showBirthdayError = () => {
	const birthdayInput = document.querySelector('#birthday');
	const birthdayError = document.querySelector('#birthday + #birthday-error');

	if (birthdayInput.validity.valueMissing)
		birthdayError.textContent = 'Please provide your birthday';
};

const showPasswordError = () => {
	const passwordInput = document.querySelector('#password');
	const passwordError = document.querySelector('#password + #password-error');

	if (passwordInput.validity.tooShort) {
		passwordError.textContent = 'Your password needs to have atleast 8 characters';
	} else if (passwordInput.validity.tooLong) {
		passwordError.textContent = `Maxium of ${passwordInput.maxlength} characters reached`;
	} else if (passwordInput.validity.valueMissing) {
		passwordError.textContent = 'Please provide a password';
	}
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
	const emailInput = document.querySelector('#email');
	const emailError = document.querySelector('#email + #email-error');

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
