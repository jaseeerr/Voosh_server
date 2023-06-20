const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    owner:String,
    date:Date,
    product:String,
    phone:String,
    subtotal:Number
    
})





module.exports = mongoose.model('orders',orderSchema)