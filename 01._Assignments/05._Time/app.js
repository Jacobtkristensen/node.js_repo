const express = require("express");
const app = express();

console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});



const PORT = 8080;

app.listen(PORT, () => console.log("Server is running on port", PORT));


module.exports = app;