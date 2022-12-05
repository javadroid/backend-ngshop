
const mongoose= require('mongoose');



const userSchema = new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    image: Array,
    email:   String,
    countInStock: Number,
    passwordHash: String,
    street:   String,
    apartment: String,
    city: String,
    zip: String,
    country:   String,
    phone: Number,
    isAdmin: Boolean,



});
 
exports.User=mongoose.model('User', userSchema)

