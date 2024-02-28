import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
import blogModel from "./blog.js";
const userModel = sequelize.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isAdmin:{
    type:DataTypes.BOOLEAN,
    defaultValue:false, 
    },
    confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue: false,
    }
},{timestamps:true});

userModel.hasMany(blogModel,{
    foreignKey:{
        name:'UserId',
        type:DataTypes.INTEGER,
    }
});

blogModel.belongsTo(userModel);
export default userModel;