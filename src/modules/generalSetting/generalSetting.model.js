const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeneralSettingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("GeneralSetting", GeneralSettingSchema);
