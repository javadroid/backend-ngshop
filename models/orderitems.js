
const mongoose= require('mongoose');



const orderitemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }});
 
exports.Orderitem=mongoose.model('OrderItem', orderitemSchema)

