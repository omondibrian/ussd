const express = require("express");
let app = express();
const { airtime } = require("./routes/airtime");
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
app.use("/airtime", airtime);
app.get("/", (req, res) => {
  res.status(200).send("NodeJs USSD example - Africa's talking");
});

//post request
app.post("/", (req, res) => {
  /*
    Here we are recieving the body params from Africa's talking
 */

  //let sessionId = req.body.sessionId;
  let phone = req.body.phoneNumber;
  //let networkCode = req.body.networkCode;
  //let serviceCode = req.body.serviceCode;

  let text = req.body.text;

  //init response
  let response = null;

  switch (text) {
    // Business logic for first level response
    case "":
      response =
        "CON Welcome Buy airtime for \n 1. Buy for this Number \n 2.Buy for Another Number";
      break;

    case "1":
      response =
        "CON Enter Airtime Amount \n ";
      break;

    // Business logic for second level response
    case "2":
      response = `CON Enter Phone Number For the receipent`;
      break;

  }
  const phoneNumberRegEx = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
  if(phoneNumberRegEx.test(text)){
    response = "CON Enter Amount"
  }
  //sending response as plain text
  res.header("Content-type: text/plain").status(200).send(response);
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
