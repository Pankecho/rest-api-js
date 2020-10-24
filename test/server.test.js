const request = require('supertest');
const app = require('../src/index');

describe('Get Endpoints', () => {
	it('Hello world endpoint', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(response.text).toBe('Hello world');
	});
	
	it('Endpoint not found', async () => {
		const response = await request(app).get('/whatever');
		expect(response.status).toBe(404);
	});
	
	it('Weather endpoint, empty query', async () => {
		const response = await request(app).get('/weather');
		expect(response.status).toBe(400);
	});
	
	it('Weather endpoint, correct query', async () => {
		const response = await request(app).get('/weather?city=Zapopan');
		expect(response.status).toBe(200);
		expect(response.body.name).toBe('Zapopan');
	});
});
