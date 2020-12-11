const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const offerSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    shipingAddress:{
        type:String,
        require:true
    },
    userId: {
        type: ObjectId,
        ref: "User",
        require:true
    },
    orderId: {
        type: ObjectId,
        ref: "Order",
        require:true
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Offer', offerSchema);
