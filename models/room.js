const { truncate } = require("fs");
const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: truncate
    },
    phonenumber: {
        type: Number, 
        required: truncate
    },
    rentperday : {
        type: Number, 
        required: true
    },
    imageurls : [],
    currentbookings : [],
    type : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }

}, {
    timestamps: true,
})

const roomModel = mongoose.model('rooms', roomSchema);
module.exports = roomModel;