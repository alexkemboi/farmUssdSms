// Set your app credentials
const credentials = {
  apiKey: "d2d903d5c57c31446e5314de3e6be12c09525fdc8a9124533b4a50cd02612624",
  username: "alexkemboi",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
  const options = {
    // Set the numbers you want to send to in international format
    to: ["+254726837210", "+254721873277"],
    // Set your message
    message: "imefanya mkuu",
    // Set your shortCode or senderId
    // from: '+254726837210'
  };

  // That’s it, hit send and we’ll take care of the rest
  sms.send(options).then(console.log).catch(console.log);
}

sendMessage();
