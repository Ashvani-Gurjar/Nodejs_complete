
const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{

     let testAccount = await nodemailer.createTestAccount();

     let transporter = await nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          auth: {
               user: 'tito.walsh@ethereal.email',
               pass: '3rzXcWujpWZT8weeP9'
          },
        });
 
        let info = await transporter.sendMail({
          from: '"Ashvani Gurjar  👻" <Gurjar@example.com>', // sender address
          to: "Arjun@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>You are Selected bro?</b>", // html body

     });
         console.log("Message sent: %s", info.messageId);
         res.json(info);
}


module.exports = sendMail;

