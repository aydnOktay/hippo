const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomepageDesktop= new Schema({
    slider_image:{
        type:String
    }
});

module.exports = mongoose.model("HomepageDesktop",HomepageDesktop);