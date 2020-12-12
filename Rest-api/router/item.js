const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { itemController } = require('../controllers');

router.get('/all',itemController.getItems);
router.get('/details/:id',auth(),itemController.getItem);
router.get('/myItems',auth(),itemController.getMyItems);

router.post('/create',auth(),itemController.createItem);
router.post('/edit/:id',auth(),itemController.editItem);




module.exports = router;