const express = require("express");

const app = express();

app.use("/profile", (req, res) => {
    res.send("Profile will come here!");
});

app.use("/", (req, res) => {
    res.send("Welcome to the new server!");
});


app.listen("7777", () => {
    console.log("Server is successfully listening to port 7777..");
});