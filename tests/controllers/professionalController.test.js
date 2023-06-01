const request = require('supertest');
const server = require('../../server'); // Importa a instância do seu aplicativo express
const db = require('../../models');
let app;

describe('Test /professional post route', function () {
  beforeEach(() => {
    app = server.listen(4002); // Inicia o servidor em uma porta diferente para evitar conflitos
  });

  afterEach((done) => {
    app.close(done);
  });

  it('should create a new professional', async function () {
    const response = await request(app)
      .post('/professional')
      .send({
        name: 'Barbeiro X',
        login: 'barbeiro x',
        password: '1234',
        email: 'barber@example.com'
      })
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Barbeiro X');
    await db.sequelize.close();
    // Add more assertions as needed
  });


});
