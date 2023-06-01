const request = require('supertest');
const server = require('../../server'); // Importa a instância do seu aplicativo express
const db = require('../../models');
let app;

describe('Test /service route post', function() {
  beforeEach(() => {
    app = server.listen(4000); // Inicia o servidor em uma porta diferente para evitar conflitos
  });

  afterEach((done) => {
    app.close(done); // Fecha o servidor após cada teste
  });

  it('should create a new service', async function() {
    const response = await request(app)
      .post('/service')
      .send({
          "category_id": 1,
          "user_id": 13
      })
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(response.body.category_id).toBe(1);
    await db.sequelize.close();
    // Add more assertions as needed
  });

  
});
