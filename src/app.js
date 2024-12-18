const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());


app.post("/signup", async (req, res) => {
    const user = new User(req.body);

    try {
    await user.save();
    res.send("User added successfully.");
    } catch(error) {
        res.status(400).res("Error adding user");
    }
})

connectDB().then(() => {
    console.log("database connected successfully");
    app.listen("7777", () => {
        console.log("Server is successfully listening to port 7777..");
    });
}).catch((err) => {
    console.log("error");
})

