const mongoose = require('mongoose')
var schema = mongoose.Schema;

var menuSchema = new schema({
    item1 : String,
    item2 : String,
    item3 : String,
    item4 : String
},{
    timestamps:true
});

module.exports = menuSchema