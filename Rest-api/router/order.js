const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { orderController } = require('../controllers');

router.get('/all',orderController.getOrders);
router.get('/details/:id',auth(),orderController.getOrder);
router.get('/myOrders',auth(),orderController.getMyOrders);

router.post('/create',auth(),orderController.createOrder);
router.post('/edit/:id',auth(),orderController.editOrder);




module.exports = router;