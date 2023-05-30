const { User } = require('../models'); // Verifique o caminho correto para o modelo User

const usersData = [
  {
    active: 1,
    neighborhood: 'Neighborhood 1',
    zip_code: '12345',
    city: 'City 1',
    cpf: '12345678901',
    born_date: '1990-01-01',
    email: 'user1@example.com',
    address: 'Address 1',
    state: 'ST',
    login: 'user1',
    name: 'User 1',
    password: 'password1',
    gender: 'M',
    telephone: '1234567890',
    user_type: 'admin'
  },
  {
    active: 1,
    neighborhood: 'Neighborhood 2',
    zip_code: '54321',
    city: 'City 2',
    cpf: '98765432109',
    born_date: '1995-05-05',
    email: 'user2@example.com',
    address: 'Address 2',
    state: 'ST',
    login: 'client1',
    name: 'User 2',
    password: '12345',
    gender: 'F',
    telephone: '0987654321',
    user_type: 'client'
  },
  {
    active: 1,
    neighborhood: 'Neighborhood 3',
    zip_code: '67890',
    city: 'City 3',
    cpf: '45678901234',
    born_date: '1985-12-31',
    email: 'user3@example.com',
    address: 'Address 3',
    state: 'ST',
    login: 'profissional1',
    name: 'User 3',
    password: '123456',
    gender: 'M',
    telephone: '9876543210',
    user_type: 'professional'
  }
];

module.exports = {
  up: async () => {
    await User.bulkCreate(usersData);
  },
  down: async () => {
    await User.destroy({ where: {} });
  }
};
