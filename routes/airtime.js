exports.airtime = (request, res) => {
    const credentials = {
        apiKey: "b7c617e08efbbab9ea9b2c645780dbf20e917f5530a932a9d74ac010f9f0293f", // use your sandbox app API key for development in the test environment
        username: "sandbox", // use 'sandbox' for development in the test environment
    };
    const africastalking = require("africastalking")(credentials);

  // Initialize a service e.g. Airtime
  const airtime = africastalking.AIRTIME;

  // Use the service

  let phoneNumber1 = {
    phoneNumber: "+254703127101",
    currencyCode: "KES",
    amount: "10",
  };
  let phoneNumber2 = {
    phoneNumber: "+254703127102",
    currencyCode: "KES",
    amount: "15",
  };

  let options = [phoneNumber1, phoneNumber2];

  // Send message and capture the response or error
  airtime
    .send({ recipients: options })
    .then((response) => {
      console.log(response);
      return res.send(
        "Success your message has been sent \n" + JSON.stringify(response)
      );
    })
    .catch((error) => {
      console.log(error);
      res.send("Oops Message not sent \n" + error);
    });
};
