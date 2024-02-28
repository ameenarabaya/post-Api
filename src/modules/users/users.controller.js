import userModel from "../../../DB/models/user.js";
export const getUser = async(req,res)=>{
    const users = await userModel.findAll();
    return res.json({message:'success',users:users})
    }
export const update = async(req,res)=>{
    const {name} = req.body;
    const {id} = req.params;
    const user = await userModel.update({name},{where:{id}});
    return res.json({message:'success',user:user})
}
export const destroy = async(req,res)=>{
    const {id} = req.params;
    const user = await userModel.destroy({where:{id:id}});
    return res.json({message:'success',user:user});
}