const express = require('express');
const router = express.Router();
const CategoryServiceController = require('../controllers/CategoryServiceController');

// Definir endpoints
router.get('/', CategoryServiceController.getAllCategoriesServices);
router.get('/:id', CategoryServiceController.getCategoryServiceById);
router.post('/', CategoryServiceController.createCategoryService);
router.put('/:id', CategoryServiceController.updateCategoryService);
router.delete('/:id', CategoryServiceController.deleteCategoryService);

module.exports = router;
