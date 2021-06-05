const router = require('express').Router();

router.get('/register', (req, res) => {
	res.render('register', { title: 'Register an account' });
});

router.get('/register/success', (req, res) => {
	res.render('success', { title: 'Successfully registered' });
});

router.post('/register', (req, res) => {
	console.log(req.body);
	res.redirect('/register/success');
});

module.exports = router;
