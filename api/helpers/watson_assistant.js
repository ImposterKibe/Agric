const prompt = require('prompt')
const Message = require('../models/message');
const {assistant,
    workspace_id} = require('../../config/credentials')

    'use strict';
require ('dotenv').config


const storeMessage= async (obj)=>{
    try{
    const newMessage = await Message.create({
                text:obj.text,
                from:obj.from,
                date:obj.date,
                id:obj.id,
                linkId:obj.linkId,
                to:obj.to
        })  }catch(err){
            console.log(err)
        }
}    
const getMessageById = async (id) =>{
    const messageDetails = await Message.findAll({
        where:{id}
    })
    //console.log(userDetails)
    return messageDetails
}
const getAllMessages = async ()=>{
    const messageList = await Message.findAll({
        raw:true
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    return messageList
}

const startConvo = async () =>{
    const conv = await assistant.message({
        workspace_id
    },processResponse)
}

// Process the Watson service response.
function processResponse (err,response){
    if (err){
        console.log(err)
        return
    }

// If an intent was detected, log it out to the console.
if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }
//if a response was detected
if (response.output.text.length != 0) {
    console.log(response.output.text[0]);
}

// Prompt for the next round of input.
prompt.start()
const newMessageFromUser = prompt.get('user_input', (err,result)=>{
    assistant.message({
      workspace_id,
      context : response.context,
      input: { text: result.user_input }
      }, processResponse)
  })
}


module.exports = {
    startConvo,
    processResponse,
    storeMessage,
    getAllMessages,
    getMessageById
}

