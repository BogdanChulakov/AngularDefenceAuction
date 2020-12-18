const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    description: {
        type: String,
        required: true,
        minlength:20
    },
    imageUrl: {
        type: String,
        required: true,
        type:URL
    },
    price: {
        type: Number,
        required: true,
        minimum: 0
    },
    timeLimit:{
        type:Date,
        required:true
    },
    isDeleted:{
        type: Boolean,
        required:true
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


module.exports = mongoose.model('Item', itemSchema);
