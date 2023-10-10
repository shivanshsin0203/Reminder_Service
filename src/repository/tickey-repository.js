const e = require('express');
const{NotificationTicket}=require('../models/index');
const {Op}=require('sequelize');
class TicketRepository{
    async getAll(){
       try{
         const ticket= await NotificationTicket.findAll();
         return ticket
       }
       catch(error){
        console.log("Error in repository layer");
        throw error
       }
    }
    async create(data){
        try{
         
        const ticket= await NotificationTicket.create(data);
        return ticket;
        }catch(error){
            console.log("Error in repository layer");
            throw error
           }
    }
    async get(data){
        try{
        const ticket=await NotificationTicket.findAll({
            where:{
                status:data.status,
                notification:{
                   [Op.lte]:new Date(),
                }
            }
        })
        console.log(ticket);
        return ticket;
        }catch(error){
            console.log("Error in repository layer");
            throw error
        } 
    }
    async update(emailId,data){
        try{
         const booking =await NotificationTicket.findByPk(emailId);
         if(data.status){
          booking.status=data.status;
         }
         await booking.save();
         return booking;
        }catch(error){
            console.log("Some error in repository");
            throw error
          }
      }
}
module.exports=TicketRepository;