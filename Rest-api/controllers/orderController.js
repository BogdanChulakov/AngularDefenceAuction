const { orderModel } = require('../models');

function getOrders(req, res, next) {
    orderModel.find()
        .then(orders => res.json(orders))
        .catch(next);
}
function getMyOrders(req, res, next) {
    const { _id: userId } = req.user;
    orderModel.find({ userId: userId })
        .then(orders => res.json(orders))
        .catch(next);
}
function getOrder(req, res, next) {
    const { id } = req.params;

    orderModel.findById(id)
        // .populate({
        //     path : 'orders',
        //     populate : {
        //       path : 'offerId'
        //     }
        //   })
        .then(order => res.json(order))
        .catch(next);
}

function createOrder(req, res, next) {
    const { name, description, imageUrl, price } = req.body;

    const { _id: id } = req.user;

    orderModel.create({ name, description, imageUrl, price, userId })
        .then(order => {
            res.json(order);
        })
        .catch(next);
}
function editOrder(req, res, next) {
    const { name, description, imageUrl, price } = req.body;

    const id = req.params.id;

    orderModel.findOneAndUpdate({_id: id}, { name, description, imageUrl, price }, { runValidators: true, new: true })
        .then(order => {
            res.json(order);
        })
        .catch(next);
}

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    getMyOrders,
    editOrder
}
