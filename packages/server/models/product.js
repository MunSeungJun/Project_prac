import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  salePrice: {
    type: Number,
    default: null
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
  isSoldOut: {
    type: Boolean,
    default: false,
  },
  isSale: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
