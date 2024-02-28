import { where } from "sequelize";
import userModel from "../../../DB/models/user.js";

export const register = async(req,res)=>{
    try{
        const {email,password,name} = req.body;
        const user = await userModel.create({email,password,name});
        return res.json({message:'success',user})
    } catch(error){
        return res.json(error);
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({email,password});
    return res.json({message:'success',user:user})
}
