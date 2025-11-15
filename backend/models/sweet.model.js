import mongoose from "mongoose";

const sweetSchema = new mongoose.Schema({
  ID: {
    type: String,
    unique: true,
    required: true,
    trim:true
  },
  name:{
    type: String,
    required: true,
    trim:true
  },
  description:{
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["milk-based","starch-based","fruit-based","vegetable-based","nut-based","confections-based"],
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
},{timestamps: true});

const Sweet = mongoose.model("Sweet",sweetSchema);
export default Sweet;