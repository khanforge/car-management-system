// Initialize express router
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticate = (req,res,next)=>{
    try{
        const token = req.headers["authorization"];
        if(!token)return res.status(401).send("unauthorized");
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next()
    }catch(e){
        console.log(e);
        res.status(500).send("internal server error");
    }
}