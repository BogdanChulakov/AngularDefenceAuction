const { itemModel } = require('../models');

function getItems(req, res, next) {
    itemModel.find()
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
    const { name, description, imageUrl, price } = req.body;

    const { _id: userId } = req.user;

    itemModel.create({ name, description, imageUrl, price, userId })
        .then(item => {
            res.json(item);
        })
        .catch(next);
}
function editItem(req, res, next) {
    const { name, description, imageUrl, price } = req.body;

    const id = req.params.id;

    itemModel.findOneAndUpdate({_id: id}, { name, description, imageUrl, price }, { runValidators: true, new: true })
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
