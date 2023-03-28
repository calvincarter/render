'use strict';

/** Express app for tarot-backend. */

const express = require('express');
const cors = require('cors');

const { NotFoundError } = require('./expressError');

const { authenticateJWT } = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const usersRoutes = require('./routes/users');
const spreadsRoutes = require('./routes/spreads');

const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(authenticateJWT);

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/spreads', spreadsRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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
