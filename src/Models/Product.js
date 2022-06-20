/* eslint-disable prettier/prettier */
const mongoose = require('mongoose/');
const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
});
mongoose.models ={};
export default mongoose.model('product', productSchema);

