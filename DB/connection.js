import {Sequelize} from 'sequelize';
 export const sequelize = new Sequelize('freedb_blog-system1', 'freedb_ameena', 'fVkmNZSG4%Ukr2?', {
    host:'sql.freedb.tech',
    port:3306,
    dialect:'mysql'
});

export const connectDB = async()=>{
    try{

        return await sequelize.sync({alter:false});
    } catch(error){
        console.log('error about connection to database')
    }
}
