const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    age: {
        type: Number,
    },
    password: {
        type: String,
    }
})

module.exports = mongoose.model("User", userSchema);