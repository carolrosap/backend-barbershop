const UserController = require('./UserController');
const { User, Service } = require('../models');

class ProfessionalController extends UserController {
    // Adicionar métodos e funcionalidades específicas para a classe ClientController
    async getAllProfessionals(req, res) {
        try {
            const { categoryId } = req.query;
            const searchParams = {
                where: {
                    user_type: 'professional',
                    active: 1
                }
            }
            console.log('categoria', req.query)
            console.log('categoria', categoryId)
            if (categoryId) {
                searchParams.include = [{
                    model: Service,
                    as: 'services',
                    where: { category_id: categoryId }
                }]
            }
            const professionals = await User.findAll(searchParams);
            res.json(professionals);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async createProfessional(req, res) {
        try {
            const professionaltData = req.body;
            professionaltData.user_type = 'professional'; // Ensure that the user_type is set to 'client'
            const newProfessional = await User.create(professionaltData);
            res.status(201).json(newProfessional);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ProfessionalController;
