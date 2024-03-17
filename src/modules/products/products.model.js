const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  daily_price: {
    type: Number,
    required: true,
  },
  three_day_price: {
    type: Number,
    required: true,
  },
  weekly_price: {
    type: Number,
  },
  product_props: {
    type: [String],
  },
  product_whic: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
  product_img: {
    type: String,
    required: true,
  },
  product_slug: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
