import mongoose from "mongoose";
import User from "./user.js";

const CarSchema = new mongoose.Schema({
        user:    {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        title: { type: String, required: true },
        description: { type: String, required: true },
        images: [{ type: String, required: true, maxlength: 10 }], 
        tags: [{ type: String }]
    })
export default mongoose.model('Car', CarSchema);