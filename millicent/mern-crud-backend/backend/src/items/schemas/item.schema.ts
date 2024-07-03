// import { Schema } from 'mongoose';

// export const ItemSchema = new Schema({
//   name: String,
//   description: String,
//   quantity: Number,
// });
import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  phoneNumber: { type: String },
  imageUrl: { type: String }, // Add imageUrl field
});