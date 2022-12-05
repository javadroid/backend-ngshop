
const mongoose= require('mongoose');



const orderSchema = new mongoose.Schema({
   
    orderitems: Array,
    shippingAddress1:   String,
    shippingAddress2: String,
    status: String,
    city: String,
    zip: String,
    country:   String,
    phone: Number,
    user: String,
    totalPrice:Number,
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required:true
    }],
    
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
})



orderSchema.set('toJSON', {
    virtuals: true,
});

exports.Order=mongoose.model('Order', orderSchema)

