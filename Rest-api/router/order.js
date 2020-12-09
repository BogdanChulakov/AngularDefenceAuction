const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { orderController } = require('../controllers');

router.get('/', orderController.getOrders);
router.get('/all',orderController.getOrders);
router.get('/details/:id',orderController.getOrder);
router.get('/myOrder',auth(),orderController.getMyOrders);

router.post('/create',auth(),orderController.createOrder);
router.post('/edit/:id',auth(),orderController.editOrder);




module.exports = router;