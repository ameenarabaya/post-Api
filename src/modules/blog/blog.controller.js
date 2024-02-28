import { where } from "sequelize";
import blogModel from "../../../DB/models/blog.js";
import userModel from "../../../DB/models/user.js";
export const getBlog = async(req,res)=>{
    const blogs = await blogModel.findAll({
        include:userModel,
    });
    return res.json({blogs});
}
export const addBlog =async(req,res)=>{
    try{
   const {title,body,UserId} = req.body;
   const blogs  = await blogModel.create({title,body,UserId});
   return res.json({message:'success',blogs});
    }catch(err){ return res.json(err)}
}
export const update = async(req,res)=>{
    try{
const {title} = req.body;
        const {id}=req.params;
        const blogs = await blogModel.update({title},{where:{id}});
        return res.json({blogs});
    } catch(err){
        return res.json(err)
    }
}
export const destroy = async(req,res)=>{
    try{

        const {id} = req.params;
        const blogs = await blogModel.destroy({where:{id}});
        return res.json({blogs});
    } catch(err){
        return res.json(err)
    }
}