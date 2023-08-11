const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

exports.connectDB = async() => {
    try {
        mongoose.connect(connectionString);
        console.log("Connected to database");
    } catch (error) {
        console.log("Unable to connect to Database");
        console.log(error);
        console.error(error);
    }
}