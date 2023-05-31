const UserController = require('./UserController');
const { User } = require('../models/');

class ClientController extends UserController {
    async getAllClients(req, res) {
        try {

            const clients = await User.findAll({
                where: {
                    user_type: 'client',
                    active: 1
                }
            });
            res.json(clients);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createClient(req, res) {
        try {
            const clientData = req.body;
            clientData.user_type = 'client'; // Ensure that the user_type is set to 'client'
            const newClient = await User.create(clientData);
            res.status(201).json(newClient);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ClientController;
