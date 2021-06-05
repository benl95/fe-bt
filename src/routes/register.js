const router = require('express').Router();

router.get('/register', (req, res) => {
	res.render('register', { title: 'Register an account' });
});

router.post('/register', (req, res) => {
	console.log(req.body);
});

module.exports = router;
