const request = require('supertest');
const { app } = require('../src/index');

describe('Get Endpoints', () => {
	it('Hello world', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(response.text).toBe('Hello world');
	});
	it('Endpoint not found', async () => {
		const response = await request(app).get('/whatever');
		expect(response.status).toBe(404);
	});
});
