'use strict';

const app = require('./backend/app');
const { PORT } = require('./backend/config');

app.listen(PORT, function() {
	console.log(`Started on http://localhost:${PORT}`);
});
