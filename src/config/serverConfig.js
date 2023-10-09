const dotenv=require('dotenv');
dotenv.config({path:'../.env'});
module.exports={
    port:process.env.port,
    Email_Id:process.env.Email_Id,
    Email_Pass:process.env.Email_Pass
};