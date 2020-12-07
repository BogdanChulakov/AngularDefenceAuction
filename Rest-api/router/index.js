const router = require('express').Router();
const users = require('./users');
const order = require('./order');
const offer = require('./offer');
const test = require('./test');

router.use('/users', users);
router.use('/order', order);
router.use('/offer', offer);
router.use('/test', test);

module.exports = router;
