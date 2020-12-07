const { offerModel } = require('../models');


function createOffer(req, res, next) {
    const { orderId } = req.params;
    const { _id: userId } = req.user;
    const { price, shipingAddress } = req.body;

    offerModel.create(price, shipingAddress, userId, orderId)
        .then( offer=> res.status(200).json(offer))
        .catch(next);
}


function getAllOffer(req, res, next) {
    const { orderId } = req.params;
    
    offerModel.find({orderId: orderId})
    .then(offerts => res.json(offerts))
    .catch(next);
}

module.exports = {
    createOffer,
    getAllOffer
}
