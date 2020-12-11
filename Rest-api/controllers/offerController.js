const { offerModel } = require('../models');


function createOffer(req, res, next) {
    const { orderId } = req.params;

    const userId = req.user.id;


    const { newPrice: price, shipingAddress } = req.body;


    offerModel.create({ price, shipingAddress, userId, orderId })

        .then(offer => res.status(200).json(offer))
        .catch(next);
}


function getAllOffer(req, res, next) {
    const { orderId } = req.params;

    offerModel.find({ orderId: orderId })
        .then(offerts => res.json(offerts))
        .catch(next);
}

function getMyOffers(req, res, next) {

    const userId = req.user.id;

    offerModel.find({ userId: userId })
        .populate('orderId')
        .then(offerts => res.json(offerts))
        .catch(next);
}


module.exports = {
    createOffer,
    getAllOffer,
    getMyOffers
}
