const Router = require('express');
const router = new Router();
const userController = require('../controller/coffeeController');

router.get('/filters', userController.getFilters);
router.get('/coffee', userController.getCoffee);
router.get('/bestCoffee', userController.getBestCofeee);

module.exports = router;