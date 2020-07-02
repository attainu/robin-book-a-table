const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//For Signup
const signUpSchema = require('../model/signUpSchema')
const signUpModel = mongoose.model('signUp' , signUpSchema)

//For Add New dish/items
const menuSchema = require('../model/menuSchema')
const menuModel = mongoose.model('menu' , menuSchema)

//To get all customer
let getAllUser = (req,res)=>{
  signUpModel.find({}, (err,user)=>{
    if(err){
      res.send(err)
    }
    res.json(user)
  })
}
router.get('/customer', getAllUser)





//To get all menu/items
let getAllMenu = (req,res)=>{
  menuModel.find({}, (err,menu)=>{
    if(err){
      res.send(err)
    }
    res.json(menu)
  })
}
router.get('/menu', getAllMenu)


//To signup new user
router.post('/newUser', (req,res)=>{
    let signup = new signUpModel(req.body)
    signup.save((err,signUpModel)=>{
      if(err){
        res.send(err)
      }else{
        console.log(req.body)
      }  
      res.send(signup)
    })
});

//To enter new dish/recipe to menu item
router.post('/newDish' , (req,res)=>{
  let menu = new menuModel(req.body)
  menu.save((err,menuModel)=>{
    if(err){
      console.log(err)
    }else{
      res.send(req.body)
    }
    console.log(req.body)  
  })
})


module.exports = router;