const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeimagesSchema = new Schema({
    homeimages_image: {
        type: String
    }
});

module.exports = mongoose.model("Homeimages", HomeimagesSchema);