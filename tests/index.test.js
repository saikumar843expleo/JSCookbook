const request = require('supertest');
const app = require('../src/app');

// FILEPATH: /c:/Users/9785/jscb/JSCookbook/tests/index.test.js


describe('GET /hello', () => {
    it('should return "Hello, World!"', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});