const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const offerSchema = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    shipingAddress:{
        type:String,
        require:true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    orderId: {
        type: ObjectId,
        ref: "Order"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Offer', offerSchema);
