// Initialize express router
import jwt from jsonwebtoken;
import dotenv from 'dotenv';

dotenv.config();

export const authenticate = (req,res,next)=>{
    try{
        const token = res.headers("Authorization");
        if(!token)return res.send(401).send("unauthorized");
        const usre = jwt.verify(token, process.end.SECRET_KEY);
        
    }catch(e){
        console.log(e);
        res.send(500).send("internal server error");
    }
}