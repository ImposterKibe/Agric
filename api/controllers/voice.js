'use strict'

//const config = require('../../config/config.js')
const {call,callCenter} = require('../helpers/voice')

const make_call = (req,res)=>{
    try{
        console.log(req)
        const ret = call(req)
        res.status(200).send(ret)
    }catch(err){
        res.status(400).send(err)
    }
}

const call_Center = (req,res)=>{
    const response = callCenter(req)
    res.set('content-Type: text/plain')
    res.send(response)
}

module.exports = {call_Center,make_call}