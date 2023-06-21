const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signupSchema = new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    guser:Boolean
    
})





module.exports = mongoose.model('users',signupSchema)