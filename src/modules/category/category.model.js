const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
  },
  category_image: {
    type: String,
    required: true,
  },
  slug:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true  
  }
});

module.exports = mongoose.model("Category", CategorySchema);
