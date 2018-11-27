// Set your app credentials
const credentials = {
    apiKey: AFRICAS_SANDBOX_API_KEY,
    username: process.env.AFRICAS_SANDBOX_USERNAME
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;


// Fetch all messages using a recursive function
function getMessagesRecursively(lastReceivedId) {

    const checkForMoreMessages = (responses) => {
        let messages = responses.SMSMessageData.Messages;

        // No more messages to fetch
        if (messages.length === 0) return "Done";

        // There are more messages
        messages.forEach(function (message) {
            console.log(message);dd
            // Reassign the lastReceivedId
            lastReceivedId = message.id;
        });
        return getMessagesRecursively(lastReceivedId);
    }

    return sms.fetchMessages({ lastReceivedId }).then(checkForMoreMessages);
}

// Our API will return 100 messages at a time back to you, starting with what you currently believe is the lastReceivedId.Specify 0 for the first time you access the method and the ID of the last message we sent you on subsequent calls
let lastReceivedId = 0;


getMessagesRecursively(lastReceivedId)
    .then(console.log)
    .catch(console.log);
