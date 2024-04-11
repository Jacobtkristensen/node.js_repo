const express = require("express");
const app = express();

console.log()
// __dirname giver absolute path til working directory
app.get("/", (req, res) => {
    res.sendFile(__dirname +"/public/homepage/homepage.html");
});

//assignment: Create a new route called publicsquare that serves publicSquare.html
app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/treasuretrove", (req,res) => {
    res.send({data: "You found it!"});
});

//assignment 
app.get("/secretpassphrase", (req, res) => {
    
    if(req.query.passphrase !== "SesameOpenUp") {
        res.status(400).send({data: "Wrong passphrase"});
    } else {
        res.redirect("/treasuretrove")
    }
});


// Task     take a name from the query string and greet  
// the person if you know them, otherwise say, "Hello stranger"

const knownNames = ["Jacob", "Bob"];

app.get("/greeting",(req, res) => {
    const providedName = req.query.name;
    if (knownNames.includes(providedName)) {
        res.send({ data: `Hello ${providedName}!` });
    } else {
        res.send({ data: "Hello stranger!" });
    }
});

app.get("/knownpeople", (req, res) => {
    res.send({ data: knownNames.length});
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));