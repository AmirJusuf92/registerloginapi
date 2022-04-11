const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser')
const app = express();
const auth = require('./rutes/auth');
dotenv.config();

//konektovanje s bazom
mongoose.connect(process.env.dbCon , ()=>{
    console.log('konektovano sa bazom');
})



app.get('/' , (res , req)=>{
    console.log('sve top sa serverom radi');
})
//middleware
app.use(express.json())
//route middlware
app.use('/user' , auth)

/*app.use('*' , (req , res)=>{
    res.status(404).send('starnica nije pronadjena')
})*/
//listen 
app.listen(5000 , ()=>{
    console.log('server upaljen na portu 5000');
})