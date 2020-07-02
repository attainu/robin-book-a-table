const mongoose = require('mongoose')
var schema = mongoose.Schema;

var signUpSchema = new schema({
    name : String,
    phone : Number,
    email : String,
    age : Number,
    password : String
},{
    timestamps : true
});

module.exports = signUpSchema