const { offerModel, userModel, itemModel } = require('../models');


function createOffer(req, res, next) {
    const { itemId } = req.params;

    const userId = req.user.id;

    const { newPrice: price, shipingAddress, price: oldPrice } = req.body;

    if (price <= oldPrice) {
        return res.status(401).json('Your offer must be bigger from the Price!')
    }

    offerModel.create({ price, shipingAddress, userId, itemId })
        .then(offer => {
            Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { offers: offer._id } }),
                itemModel.findByIdAndUpdate({ _id: itemId }, { price, $push: { offers: offer._id } })
            ])
            return res.status(200).json(offer);
        })
        .catch(next);
}

function getAllOffers(req, res, next) {
    const { itemId } = req.params;

    offerModel.find({ itemId: itemId })
        .sort([['price', -1]])
        .populate('itemId')
        .populate('userId')
        .then(offers => res.json(offers))
        .catch(next);
}

function getMyOffers(req, res, next) {

    const userId = req.user.id;

    offerModel.find({ userId: userId })
        .populate('itemId')
        .populate('userId')
        .then(offers =>
            res.json(offers)
        )
        .catch(next);
}


module.exports = {
    createOffer,
    getAllOffers,
    getMyOffers
}
