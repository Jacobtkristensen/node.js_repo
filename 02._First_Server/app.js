// const express = require("express")
// const app = express();

const app = require("express")();

//route
//endpoint
//callback function
//request, response
app.get("/", (req, res) => {
  res.send({ data: "Welcome" });
});

//route
app.get("/secondRoute", (req, res) => {
  res.send({ data: [1, 2, 3, 4] });
});

//PathVariable
app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
  const firstValue = req.params.someValue;
  const secondValue = req.params.someOtherValue;
  console.log(firstValue, secondValue);
  console.log(req.params);
  res.send({ data: "thirdRoute" });
});

let walletBalance = 100;

app.get("/wallet/:withdrawalAmount", (req, res) => {
  /* assignment 
        start with the balance of of 100 in the wallet.
        every time a client calls this route the value of paymentOut should be substracted from the balance
        if the paymentOut creates a balance below 0, then tell the client "Sorry not enough founds"
        */
  const withdrawalAmount = Number(req.params.withdrawalAmount);
  if (!withdrawalAmount) {
    res.send({ data: "You have submitted an incorrect amount" });
  }
  if (withdrawalAmount > walletBalance) {
    res.send({
      data: `Sorry balance is not high enough. There's ${walletBalance} left.`,
    });
  } else {
    walletBalance -= withdrawalAmount;
    res.send({
      data: `You withdrew ${withdrawalAmount} from the wallet. There's ${walletBalance} left.`,
    });
  }
});

//task create a route called fillUpWallet that allows a client to
// fill up the wallet with a specified amount

app.get("/page", (req, res) => {
  res.send("<h1>Welcome to my page</h1>");
});

//http: 80
//https: 443
//http dev: 8080
//https dev: 9090
app.listen(8080);
