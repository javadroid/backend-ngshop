const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: { type: String, require: true },
  richDescription: { type: String, default: "" },
  image: { type: String, default: "" },
  images: [{ type: String }],
  brand: { type: String, default: "" },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Category",
  },
  rating: { type: Number, default: 0 },
  isFeatured: {type:Boolean, default: false},
  price: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  dateCreated: { type: Date, default:Date.now() },
  countInStock: { type: Number, require: true, min: 0, max: 255 },
});

exports.Product = mongoose.model("Product", productSchema);
