const prompt = require('prompt')
const {assistant,
    workspace_id} = require('../../config/credentials')

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
    processResponse
}