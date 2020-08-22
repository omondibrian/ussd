// Set your app credentials
const credentials = {
  apiKey: "562e35e777c7127a029d2de3be85f937ab9089535baa190b35e46f409b16a9e6",
  username: "sandbox",
};
// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);
// Get airtime service
const airtime = AfricasTalking.AIRTIME;
// Sending airtime function
const sendAirtime = async () => {
  const options = {
    recipients: [
      {
        phoneNumber: phoneNumber,
        currencyCode: "KES",
        amount: "100",
      },
    ],
  };
  try {
    const response = await airtime.send(options);
    return response;
  } catch (e) {
    console.log(error);
  }
  // airtime
  //   .send(options)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //   });
};
// Send the airtime
module.exports = { sendAirtime };
