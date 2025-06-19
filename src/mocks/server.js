const { setupServer } = require('msw/node');
const { rest } = require('msw');

const handlers = [
  rest.get('/api/courses', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        courses: [
          {
            id: '1',
            title: 'React Course',
            description: 'Learn React basics',
            price: 199,
            duration: '8 weeks'
          }
        ]
      })
    );
  }),
  rest.post('/api/admin/login', (req, res, ctx) => {
    const { password } = req.body;
    return res(
      ctx.status(password === 'admin123' ? 200 : 401),
      ctx.json({
        success: password === 'admin123',
        message: password === 'admin123' ? 'Login successful' : 'Invalid password'
      })
    );
  }),
  rest.post('/api/chat', (req, res, ctx) => {
    const { message } = req.body;
    return res(
      ctx.status(200),
      ctx.json({
        response: `You said: ${message}`
      })
    );
  })
];

const server = setupServer(...handlers);

module.exports = { server, handlers };
