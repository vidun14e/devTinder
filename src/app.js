const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const {validateSignupData} = require("./utils/validation");

const app = express();

app.use(express.json());


app.post("/signup", async (req, res) => {
    
    // validate data
    validateSignupData(req);


    // creating a new instance of the user model
    const user = new User(req.body);


    try {
    await user.save();
    res.send("User added successfully.");
    } catch(error) {
        res.status(400).res("Error:" + error.message);
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

