require('dotenv').config();

const accountSid = process.env.accountSid ; 
const authToken = process.env.authToken ;
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hubo un nuevo pedido en la baticueva', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+573228939436' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();