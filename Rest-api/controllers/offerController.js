const { offerModel, userModel, orderModel } = require('../models');


function createOffer(req, res, next) {
    const { orderId } = req.params;

    const userId = req.user.id;


    const { newPrice: price, shipingAddress } = req.body;


    offerModel.create({ price, shipingAddress, userId, orderId })
        .then(offer => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { offers: offer._id } }),
                orderModel.findByIdAndUpdate({ _id: orderId }, {price, $push: { offers: offer._id } })
            ])
        })
        .catch(next);
}

function getAllOffer(req, res, next) {
    const { orderId } = req.params;

    offerModel.find({ orderId: orderId })
        .then(offers => res.json(offers))
        .catch(next);
}

function getMyOffers(req, res, next) {

    const userId = req.user.id;

    offerModel.find({ userId: userId })
        .populate('orderId')
        .then(offers => res.json(offers))
        .catch(next);
}


module.exports = {
    createOffer,
    getAllOffer,
    getMyOffers
}
