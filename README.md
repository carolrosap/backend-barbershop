## Back-end Node Barbershop
### Inicializar projeto: <br>
Necessário ter um servidor mysql rodando, a base, por padrão é nomeada por "barber_shop" e sem senha, o que pode ser mudado no arquivo "config.json"

npm i <br>
npx sequelize-cli db:migrate <br>
npx sequelize-cli db:seed:all <br>
npm start <br>
### Acesso em: <br>
localhost:3000/
### Rotas disponíveis: <br>
/professional <br>
/client <br>
/service <br>
/schedule <br>
/scheduling <br>

