import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", ProductSchema);