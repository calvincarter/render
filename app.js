'use strict';

/** Express app for tarot-backend. */

const express = require('express');
const cors = require('cors');
// Requiring path so we can use relative routes to our react HTML files
const path = require("path");

const { NotFoundError } = require('./expressError');

const { authenticateJWT } = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const usersRoutes = require('./routes/users');
const spreadsRoutes = require('./routes/spreads');

const morgan = require('morgan');

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(morgan('tiny'));
app.use(authenticateJWT);

// Static directory
app.use(express.static("./client/build"));

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/spreads', spreadsRoutes);

// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

/** Handle 404 errors -- this matches everything */
app.use(function(req, res, next) {
	return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function(err, req, res, next) {
	if (process.env.NODE_ENV !== 'test') console.error(err.stack);
	const status = err.status || 500;
	const message = err.message;

	return res.status(status).json({
		error: { message, status }
	});
});

module.exports = app;
