const express =require('express');
const bodyParser =require('body-parser')
const {port}=require('./config/serverConfig')

const app=express();

const setupAndStart=()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(port,()=>{
       
        console.log("Server Started at "+port)
        });
}
setupAndStart();