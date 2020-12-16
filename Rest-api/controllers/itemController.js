const { itemModel } = require('../models');

function getItems(req, res, next) {

    const dateNow = new Date().toJSON();

    itemModel.find({ timeLimit: { $gte: dateNow } })
        .then(items => res.json(items))
        .catch(next);
}
function getMyItems(req, res, next) {
    const { _id: userId } = req.user;

    const dateNow = new Date().toJSON();

    Promise.all([
        itemModel.find({ userId: userId, timeLimit: { $gte: dateNow } }),
        itemModel.find({ userId: userId, timeLimit: { $lte: dateNow } })]
    ).then(([activeItems, expiredItems]) => {
        res.json({ activeItems, expiredItems });
    })
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

    if (price <= 0) {
        return res.status(401).json("Price cannot be a negative!")
    }

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
