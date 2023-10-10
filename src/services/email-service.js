const sender=require('../config/emailConfig');
const TicketRepository=require('../repository/tickey-repository')
const repo=new TicketRepository();
const sendBasicEmail=(mailFrom,mailTo,mailSubject,mailBody)=>{
    sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody,
    });
    };
const fetchPendingMails=async(timestamp)=>{
    try{
    const responce=await repo.get({status:"PENDING"});
    return responce;
    }catch(error){
        console.log("An errror in Service layer");
        throw error
    }
}
const createNotification=async(data)=>{
    try{
     const responce= await repo.create(data);
     return responce
    }catch(error){
        console.log("An errror in Service layer");
        throw error
    }
}
const updateTicket=async(TicketId,data)=>{
        try{
            const responce= await repo.update(TicketId,data);
         return responce;
        }catch(error){
        console.log("An errror in Service layer");
        throw error
    }
}

    module.exports={updateTicket,sendBasicEmail,fetchPendingMails,createNotification};