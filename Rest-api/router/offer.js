const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { offerController } = require('../controllers');

router.get('/getAllOffers/:itemId', auth(), offerController.getAllOffer);
router.get('/getMyOffers', auth(), offerController.getMyOffers);


router.post('/createOffer/:itemId',auth(), offerController.createOffer);

module.exports = router;