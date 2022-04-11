const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const bodyparser = require('body-parser')

const router = express.Router();

router.post('/register' , async (req , res) =>{
    console.log('registracija uspijesna');
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try{
        let saveUser = await user.save();
        res.send(saveUser);
    }
    catch(err){
        res.status(400).send(err);
    }

})
module.exports = router;