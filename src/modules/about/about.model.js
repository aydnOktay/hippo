const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
    about_images: {
        type: String
    },
    about_description: {
        type: String
    }
});

module.exports = mongoose.model("About", AboutSchema);