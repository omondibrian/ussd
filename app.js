const express = require("express");
let app = express();

//parse form body
let bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

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
        "CON Welcome rayan hasomi. What will you like to do today? \n  1. enda malindi \n 2. piga rayan";
      break;

    case "1":
      response =
        "CON select an account option \n 1. Check account balance \n 2. Account number";
      break;

    // Business logic for second level response
    case "2":
      response = `END rayan achapwe`;
      break;

    case "1*1":
      response = "END your account balance is $100";
      break;
    case "1*2":
      response = "poa basi";
  }

  //sending response as plain text
  res
    .header("Content-type: text/plain")
    .status(200)
    .send(response);
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
