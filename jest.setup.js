require('@testing-library/jest-dom/vitest');
const { server } = require('./src/mocks/server');

// Setup the server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); 
// tests
// afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
// afterAll(() => server.close());
