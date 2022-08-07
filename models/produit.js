const mongoose = require('mongoose');

const prod = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: Number,
    required: true

});

module.exports = mongoose.model('Product', prod);