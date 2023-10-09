const express =require('express');
const bodyParser =require('body-parser')
const {port}=require('./config/serverConfig')
const {sendBasicEmail}=require('./services/email-service')
const app=express();

const setupAndStart=()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(port,()=>{
       console.log("Server Started at "+port)
        sendBasicEmail(
            "formaldehyde080@gmail.com",
            "formaldehyde080@gmail.com",
            "This is a testing email",
            "I hope you would like the support it"
        )
    });
}
setupAndStart();