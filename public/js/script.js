main();

function main() {
	form = getForm();
	form.addEventListener('input', e => {
		if (e.target.type !== 'submit') {
			localStorage.setItem(e.target.name, e.target.value);
		}
	});
	window.addEventListener('load', loadInput);
}

function getForm() {
	return document.getElementById('register');
}

function loadInput() {
	let inputFields = document.querySelectorAll('form input');

	inputFields.forEach(input => {
		const userInput = localStorage.getItem(input.name);

		if (userInput) {
			if (input.type === 'radio' && input.value === userInput) {
				input.checked = true;
			} else if (input.type !== 'radio') {
				input.value = userInput;
			}
		}
	});
}
