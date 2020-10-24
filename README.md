# REST API JS

Basic REST API challenge for Golang Bootcamp

## Dependencies
- express: To handle the server (`https://expressjs.com`)
- node-fetch: To do HTTP requests to consume the external API (`https://github.com/node-fetch/node-fetch`)
- jest: To do the basic unit testing for the endpoints (`https://jestjs.io`)
- supertest: To do the HTTP request for the unit testing (`https://github.com/visionmedia/supertest`)

## Usage

Install the dependencies

```bash
npm install
```
Run the server

```bash
npm start
```

## External API used
`https://openweathermap.org`

## Endpoints
- ### `/` 
Returns the hello world string
- ### `/weather?city={ cityName }`
Returns the weather data for a city
