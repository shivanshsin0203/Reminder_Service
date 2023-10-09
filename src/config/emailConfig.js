const nodemailer=require('nodemailer');
const {Email_Id,Email_Pass}=require('./serverConfig')
const sender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:Email_Id,  
        pass:Email_Pass
    }
});
module.exports=sender;