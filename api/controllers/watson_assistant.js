const assistant = require('../helpers/watson_assistant')
const util = require('util');

const startChat = (req,res)=>{
    assistant.startConvo()
    const message= util.format('Success')
    res.status(200).send({message})
}

// const respond = (req,res)=>{
//     const text= req.swagger.params.text.value
//     assistant.getResponse(text)
//     const message= util.format('Success')
//     res.status(200).send({message})
// }

const receiveMessage = (req,res)=>{
    try{
    const textDetails = req.swagger.params.textDetails.value
    assistant.storeMessage(textDetails)
    const messages = assistant.getAllMessages()
    res.status(200).send({messages})
    }catch(err){
      console.log(err)  
    }
}
module.exports={
    startChat,
    receiveMessage
}