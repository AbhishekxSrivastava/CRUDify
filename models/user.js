const mongoose = require('mongoose');

//Schema 
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    gender : {
        type : String,
    }
    },
    {timestamps : true}
);

const User = new mongoose.model("user", userSchema);

module.exports = User;