const express = require("express");
const { adminAuth } = require("./middleWares/auth");

const app = express();

app.get("/admin", adminAuth, (req, res) => {
    res.send("This is admin");
});


app.listen("7777", () => {
    console.log("Server is successfully listening to port 7777..");
});