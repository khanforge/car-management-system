import mongoose from "mongoose";

export const Connection = async () => {
    try{
        const URI = process.env.CONNECTION_URI;
        const conn = await mongoose.connect(URI, {}).then(() => console.log("MongoDB Connected"))
    }catch(e){
        console.log(e);
        throw e;
    }
}