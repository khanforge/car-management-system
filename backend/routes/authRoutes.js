import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/register', async(req, res)=>{
    try{
            const {name, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).send({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name, email, password: hashedPassword
        })
        await newUser.save();
        res.status(200).send({message:"User Registered Successfully"});
    }catch(e){
        console.log(e);
        res.status(500).send("internal server error");
    }
})

router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user)return res.status(400).send("user not found");
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)return res.status(400).send("invalid credentils");
        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY);
        res.send({token});
    }catch(e){
        console.log(e);
        res.status(500).send("internal server error");
    }
})

export default router;