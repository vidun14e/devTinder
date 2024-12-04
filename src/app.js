const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
    console.log("Route handler 1")
    res.send("Response 1"); // Route handler 1
    next();
}, 
(req, res, next) => {
    console.log("Route handler 2")
    // res.send("Response 2"); // Route handler 2
    next();
}, 
(req, res, next) => {
    console.log("Route handler 3")
    // res.send("Response 3"); // Route handler 3
    next();
}, 
(req, res) => {
    console.log("Route handler 4")
    res.send("Response 4"); // Route handler 4
});


app.listen("7777", () => {
    console.log("Server is successfully listening to port 7777..");
});