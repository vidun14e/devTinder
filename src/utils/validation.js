const validator = require("validator");

const validateSignupData = (req) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("firstname and latname is required");
    }
    else if(!validator.isEmail(email)) {
        throw new Error("email id is not valid");
    }
    else if(!validator.isStrongPassword(password)) {
        throw new Error("password should be strong");
    }
}

module.exports = {
    validateSignupData,
}