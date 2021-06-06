const router = require('express').Router();
const User = require('../helpers/user');
const Database = require('../helpers/database');

router.get('/register', (req, res) => {
	let sex = ['Man', 'Woman', 'Other'];
	let orientation = ['Straight', 'Gay', 'Lesbian', 'Queer', 'Other'];
	res.render('register', { title: 'Register an account', orientation: orientation, sex: sex });
});

router.get('/register/success', (req, res) => {
	res.render('success', { title: 'Successfully registered' });
});

router.post('/register', (req, res) => {
	const { name, birthday, sex, orientation, photo } = req.body;
	const user = new User(name, birthday, sex, orientation, photo);
	const database = new Database();
	database.create(user);
	res.redirect('/register/success');
});

module.exports = router;
