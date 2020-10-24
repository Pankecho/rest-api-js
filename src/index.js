const express = require('express');
const fetch = require('node-fetch');
const app = express();

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '335a6da2bb0a7a12dbce8433f00f8b8d';

app.get('/', (req, res) => {
	res.status(200).send('Hello world');
});

app.get('/weather', (req, res) => {
	const city = req.query.city;
	if (!city) {
		res.status(400).json({ error: 'Invalid city name' });
	} else {
		const url = `${ WEATHER_API_URL }?q=${ city }&appid=${ API_KEY }`;
		fetch(encodeURI(url))
			.then(response => response.json())
			.then(response => {
				res.status(200).json(response);
			})
			.catch(err => {
				console.error(err);
				res.status(err.code ? parseInt(err.code) : 500).json({ error: err.message });
			});
	}
});

const server = app.listen(3000, () => {
	const port = server.address().port;
	console.log('Server listening at port %s', port);
});

module.exports = { app, server };
