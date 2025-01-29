import mongoose from "mongoose";
import Car from "./cars.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    }]
}, {
    timestamps: true
})
export default mongoose.model('User', userSchema);