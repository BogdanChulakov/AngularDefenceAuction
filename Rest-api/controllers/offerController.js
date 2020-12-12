const { offerModel, userModel, itemModel } = require('../models');


function createOffer(req, res, next) {
    const { itemId } = req.params;

    const userId = req.user.id;

    const { newPrice: price, shipingAddress } = req.body;


    offerModel.create({ price, shipingAddress, userId, itemId })
        .then(offer => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { offers: offer._id } }),
                itemModel.findByIdAndUpdate({ _id: itemId }, { price, $push: { offers: offer._id } })
            ])
        })
        .catch(next);
}

function getAllOffer(req, res, next) {
    const { itemId } = req.params;

    offerModel.find({ itemId: itemId })
        .then(offers => res.json(offers))
        .catch(next);
}

function getMyOffers(req, res, next) {

    const userId = req.user.id;

    offerModel.find({ userId: userId })
        .populate('itemId')
        .then(offers => res.json(offers))
        .catch(next);
}


module.exports = {
    createOffer,
    getAllOffer,
    getMyOffers
}
