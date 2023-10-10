const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender=require('../config/emailConfig')
const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        try {
            const response = await emailService.fetchPendingMails();
            console.log(response);
            response.forEach((email) => {
                sender.sendMail({
                    to:email.recepientEmail,
                    subject:email.subject,
                    text:email.content
                },async(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        await emailService.updateTicket(email.id,{status:'SUCCESS'})
                    }
                })
            });
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    });
};

module.exports = setupJobs;
