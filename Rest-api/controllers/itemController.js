const { itemModel } = require('../models');

function getItems(req, res, next) {

    const dateNow = new Date().toJSON();

    itemModel.find({ timeLimit: { $gte: dateNow } })
        .then(items => res.json(items))
        .catch(next);
}
function getMyItems(req, res, next) {
    const { _id: userId } = req.user;

    itemModel.find({ userId: userId })
        .then(items => res.json(items))
        .catch(next);
}
function getItem(req, res, next) {
    const { id } = req.params;

    itemModel.findById(id)
        .then(item => res.json(item))
        .catch(next);
}

function createItem(req, res, next) {
    const { name, description, imageUrl, price, timeLimit } = req.body;

    let date = new Date().toJSON();

    if (timeLimit <= date) {
        return res.status(401).json('Time Limit must be future date!')
    }
    if (price <= 0) {
        return res.status(401).json('Price cannot be a negative!')
    }
    if (name.length < 3) {
        return res.status(401).json('Name must be at least 3 symbols!!')
    }
    const { _id: userId } = req.user;

    itemModel.create({ name, description, imageUrl, price, userId, timeLimit })
        .then(item => {
            res.json(item);
        })
        .catch(next);
}
function editItem(req, res, next) {
    const { name, description, imageUrl, price } = req.body;

    const id = req.params.id;

    itemModel.findOneAndUpdate({ _id: id }, { name, description, imageUrl, price }, { runValidators: true, new: true })
        .then(item => {
            res.json(item);
        })
        .catch(next);
}

module.exports = {
    getItems,
    getItem,
    createItem,
    getMyItems,
    editItem
}
