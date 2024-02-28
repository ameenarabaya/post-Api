import {Sequelize} from 'sequelize';
 export const sequelize = new Sequelize('blogsystem', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
});

export const connectDB = async()=>{
    try{

        return await sequelize.sync({alter:false});
    } catch(error){
        console.log('error about connection to database')
    }
}
