const axios = require('axios')
const options = {
    apiKey: process.env.AFRICAS_TALKING_API_KEY,
    username: process.env.AFRICAS_TALKING_USERNAME 
}
const AfricasTalking = require('africastalking')(options)
const voice = AfricasTalking.VOICE

const make_call =(req)=>{ 
    voice.call({
        callFrom: process.env.VIRTUAL_PHONE_NUMBER,
        callTo: '+254726123456'
    }).then(callData=>{
        return callData
    }).catch(err=>{
        return err
    })
}

const callCenter = (req)=>{
    //persist call info

    console.log(req.swagger.params)
    const text = 'Thank you for calling'
    const response = '<?xml version="1.0>" encoding="UTF-8"?><Response><Say>' +text + 
     '</Say><Dial phoneNumbers="+2547062297423" ringbackTone="" record="false" sequential="true"/></Response>'

     return response
}
module.exports = {
    make_call,callCenter
}