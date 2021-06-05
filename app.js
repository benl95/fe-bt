// Import libraries
require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

// Port
const port = process.env.PORT || 3000;

// Routes
const home = require('./src/routes/home');
const register = require('./src/routes/register');

// Set view engine
app.set('view engine', 'hbs')
	.set('views', __dirname + '/views')
	.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));

// Set static directory
app.use(express.static(path.join(__dirname, '/public')))
	.use(express.urlencoded({ extended: true }))
	.use(home)
	.use(register);

// Host server locally
app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
