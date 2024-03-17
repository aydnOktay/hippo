const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomepageMobile= new Schema({
    slider_image:{
        type:String
    }
});

module.exports = mongoose.model("HomepageMobile",HomepageMobile);