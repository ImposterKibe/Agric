const AssistantV1 = require('watson-developer-cloud/assistant/v1') //Import Watson Assistant dependencies

// Set up Assistant service wrapper.
const assistant = new AssistantV1({
    username: process.env.ASSISTANT_USERNAME, // replace with service username
    password: process.env.ASSISTANT_PASSWORD, // replace with service password
    version: '2018-09-18'

})
const workspace_id = process.env.WORKSPACE_ID

module.exports = {
    assistant,
    workspace_id
}