const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { orderController } = require('../controllers');

router.get('/', orderController.getOrders);

router.post('/create',auth(),orderController.createOrder);
router.get('/details/:id',orderController.getOrder);
router.get('/myOrder',orderController.getMyOrders);


module.exports = router;