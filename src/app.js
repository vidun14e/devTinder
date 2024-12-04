const express = require("express");

const app = express();

// This will only handle Get call to /user
app.get("/user", (req, res) => {
    console.log(req.query);
    res.send({firstName : "Vidun", age: 30});
})

app.get("/user/:userId", (req, res) => {
    console.log(req.params);
    res.send({firstName : "Vidun", age: 30});
})

app.post("/user", (req, res) => {
    // Logic to save data to DB
    res.send("Successfully saved the user data!");
});

app.use("/profile", (req, res) => {
    res.send("Profile will come here!");
});


app.listen("7777", () => {
    console.log("Server is successfully listening to port 7777..");
});