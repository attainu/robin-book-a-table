const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var newUser = require('./routes/routes')
var getAllUser = require('./routes/routes')
var getAllMenu = require('./routes/routes')

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended : true }))



//Database Connection
mongoose.connect('mongodb://localhost/tableBooking_DB' , {useNewUrlParser : true, useUnifiedTopology:true}, (err)=>{
    if(err){
        console.log(err);   
        throw err   
    }
    console.log('DB connects');
});

//calling for routes
app.use('/', newUser);
app.use('/' , getAllMenu)




app.listen(3000 , (req,res)=>{
    console.log('server starts on port 3000');
})