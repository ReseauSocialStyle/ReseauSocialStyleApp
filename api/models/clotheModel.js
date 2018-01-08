'use strict';
var mongoose = require("mongoose");

var ClotheSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter he name of the clothe'
    },
    brand: {
        type: String,
        required: "Please specify the brand"
    },
    size: {
        type: [{
            type: String,
            enum: ['XS', 'S', 'M', 'L', 'XL']
        },
        ],
        default:'XS'
    }
})

module.exports = mongoose.model ('Clothes', ClotheSchema);