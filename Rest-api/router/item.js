const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { itemController } = require('../controllers');

router.get('/all',itemController.getItems);
router.get('/search/:search',itemController.getSearchItems);

router.get('/details/:id',itemController.getItem);
router.get('/myItems',auth(),itemController.getMyItems);

router.post('/create',auth(),itemController.createItem);
router.post('/edit/:id',auth(),itemController.editItem);
router.post('/delete/:id',auth(),itemController.deleteItem);





module.exports = router;