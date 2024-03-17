const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    adress: {
        type: String,
        required: true
    },
    citys: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    youtube: {
        type: String
    },
    instagram: {
        type: String
    },
    vimeo:{
        type: String
    },
    contact_image:{
        type: String
    }
});

module.exports = mongoose.model("Contact", ContactSchema);