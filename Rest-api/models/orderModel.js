const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offers: [{
        type: ObjectId,
        ref: "Offer"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: { createdAt: 'created_at' } });

orderSchema.methods = {
    isCreator: function (userId) {
        return userId === this.userId;
    }
}

module.exports = mongoose.model('Order', orderSchema);
