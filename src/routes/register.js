const router = require('express').Router();

router.get('/register', (req, res) => {
	res.render('register', { title: 'Register an account' });
});

module.exports = router;
