const mongoose = require('mongoose')

const signUpSchema = new mongoose.Schema({
    NAME : String,
    PHONE_NO : Number,
    EMAIL_ID : String,
    AGE : Number,
    PASSWORD : String
}, {
    timestamps : true
});

const loginSchema = new mongoose.Schema({
    NAME : String,
    EMAIL_ID : String,
    PASSWORD : String
}, {
    timestamps :true
});


module.exports = ('signUp' , signUpSchema)
module.exports = ('login' , loginSchema)


