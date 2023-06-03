const request = require('supertest');
const server = require('../../server'); 
const db = require('../../models');
let app;

describe('Test /client route', function() {
  beforeEach(() => {
    app = server.listen(4000); 
  });

  afterEach((done) => {
    app.close(done); // Fecha o servidor após cada teste
  });

  it('should create a new user', async function() {
    const response = await request(app)
      .post('/client')
      .send({
        name: 'John Doe',
        login: 'johndoe',
        password: '1234',
        email: 'john@example.com'
      })
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('John Doe');
    await db.sequelize.close();
  });

  
});
