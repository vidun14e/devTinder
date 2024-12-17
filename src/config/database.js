const mongoose =  require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://vidun14e:vidun%401427@namastenode.glrol.mongodb.net/devTinder"
    )
}

module.exports = connectDB;