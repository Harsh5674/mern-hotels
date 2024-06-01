import  express, {Request,Response} from "express";
const router = express.Router();
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

// /api/users/register pe below will work
router.post("/register", [
    check("firstName","First Name is required").isString(),
    check("lastName","Last Name is required").isString(),
    check("email","Email is required").isEmail(),
    check("password","Password with 6 or more characters is required").isLength({ min:6 })
], async (req:Request , res:Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({message: errors.array()});
    }
      try{
        let user =await User.findOne({
              email: req.body.email,
        });

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

       // user = await User.create(req.body); it will directly create and save
       user = new User(req.body);
       await user.save();
       //res.status(201).json(user);

       const token = jwt.sign(
        {userId: user.id}, 
        process.env.JWT_SECRET_KEY as string, {
            expiresIn: "1d",
        }
        );

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });

        return res.status(200).json({message: "User registered OK"});

      }
      catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
      }
});

export default router;