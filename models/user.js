const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    name :{
        type:String , 
        required: true,
        min:3
    },
    email:{
        type:String,
        required: true , 
        min:8
    },
    password:{
        type:String,
        requires:true
        
    },
    date:{
        type:Date,
        default: Date.now

    }
})
module.exports = mongoose.model('user' , UserSchema); 