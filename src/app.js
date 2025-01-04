const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const {validateSignupData} = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cookieParser());


app.post("/signup", async (req, res) => {
    
    // validate data
    validateSignupData(req);


    const { firstName, lastName, age, email, password } = req.body;

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);


    // creating a new instance of the user model
    const user = new User({
        firstName,
        lastName,
        age,
        email,
        password: passwordHash
    });


    try {
    await user.save();
    res.send("User added successfully.");
    } catch(error) {
        res.status(400).send("Error:" + error.message);
    }
})

// login api
app.post("/login", async (req, res) => {
    
    try {
    const { email, password } = req.body;
    const user = await User.findOne({email: email});

    if (!user) {
        throw new Error("email id is not valid");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(isPasswordValid) {

    // Create JWT token
    const token = await jwt.sign({_id: user._id}, "dev@Tinder1234");

    res.cookie("token", token);

    res.send("Login successfull!!"); 
    } else {
        throw new Error("password not valid"); 
    }
    } catch(error) {
        res.status(400).send("Error:" + error.message);
    }
})

app.get("/profile", async (req, res) => {

    try {
        const cookies = req.cookies;
    
        const { token } = cookies;
    
        if (!token) {
            throw new Error("Invalid token");
        }
    
        const decodedMessage = await jwt.verify(token, "dev@Tinder1234");
    
        const { _id } = decodedMessage;
    
        const user = await User.findById(_id);
        if(!user) {
            throw new Error("user does not exist");
        }
    
        res.send(user);
    } catch(error) {
        res.status(400).send("Error:" + error.message);
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

