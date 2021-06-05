const router = require('express').Router();
const User = require('../helpers/user');

router.get('/register', (req, res) => {
	res.render('register', { title: 'Register an account' });
});

router.get('/register/success', (req, res) => {
	res.render('success', { title: 'Successfully registered' });
});

router.post('/register', (req, res) => {
	const { name, birthday, sex, orientation, photo } = req.body;
	const user = new User(name, birthday, sex, orientation, photo);
	res.redirect('/register/success');
});

module.exports = router;
