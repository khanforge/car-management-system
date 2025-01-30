import mongoose from "mongoose";

export const Connection = async () => {
    try{
        const URI = process.env.CONNECTION_URI;
        const conn = await mongoose.connect(URI, {})
    }catch(e){
        console.log(e);
        throw e;
    }
}