const express = require('express');
const app = express();

app.use(express.json());

// UTC
// visible via the 'Z' in console. means UTC+0
console.log(new Date());


// Unix Epoch Time (Seconds since 1970 1st of January) 
console.log(Date.now());

//Local time (in my case right now and here, CEST GMT+0100)
console.log(Date());

// assignment   create a route with the endpoint /date
// assigment    that returns current date
app.get("/date", (req, res) => {
const date = Date();
res.send({ data: date })    
})

// assignment   create a route with the endpoint /month 
// assignment   that returns the current month
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

app.get("/month/version1", (req, res) => {
    const currentMonth = new Date().getMonth();

    res.send({ data: monthNames[currentMonth] });
});

app.get("/month/version2", (req, res) => {
    const monthName = new Date().toLocaleDateString("en-us", {month : "long"});

    res.send({ data: monthName });
});

app.get("/month/version3", (req, res) => {
    const monthName = Date().split (" ") [1];

    res.send({ data: monthName });
});


/* assigment get today on /day i will solve it with version1's technique */

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
app.get("/day", (req, res) => {
    const dayName = days[new Date().getDay()];

    res.send({data: dayName})
})


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
      console.log("Error starting express server");
      return;
    }
    console.log("Server is on running on port", 8080);
  });