const TicketService=require('../services/email-service')

const create=async(req,res)=>{
    try{
      const responce=await TicketService.createNotification(req.body);
      return res.status(201).json({
        success:true,
        message:"Successfully Created",
        err:[],
        data:responce
      })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            data:[],
            err:error,
            message:"unable to register email"
        })
    }
}
module.exports={create}