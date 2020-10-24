const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('Hello world');
});

const server = app.listen(3000, () => {
	const port = server.address().port;
	console.log('Server listening at port %s', port);
});

module.exports = { app, server };
