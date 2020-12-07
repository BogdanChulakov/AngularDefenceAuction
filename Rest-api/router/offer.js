const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { offerController } = require('../controllers');

router.get('/createOffer/:orderId',auth(), offerController.createOffer);
router.post('/getAllOffer/:orderId', auth(), offerController.getAllOffer);

module.exports = router;