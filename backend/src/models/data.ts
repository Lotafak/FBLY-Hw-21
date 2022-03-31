import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: String,
  value: Number,
  type: { type: String, enum: ['NPS', 'Emoticon'] },
  createdAt: Date
})

export default mongoose.model('Data', schema, "data");
