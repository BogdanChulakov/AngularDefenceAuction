const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema({
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

itemSchema.methods = {
    isCreator: function (userId) {
        return userId === this.userId;
    }
}

module.exports = mongoose.model('Item', itemSchema);
