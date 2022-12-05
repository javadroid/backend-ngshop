const express = require('express');
const router= express.Router()
const {Orderitem}=require('../models/orderitems')
const app = express();
const api=process.env.API_URL


router.get(`/`,async(req, res, next) => {
    console.log( Orderitem)
    res.send(await Orderitem.find())

})

router.post(`/`,(req, res, next) => {
    const newOrderitem  =new Orderitem({
        product: req.body.product,
        image:req.body.image,
        quantity: req.body.quantity

        
    }) 
    newOrderitem.save()
    .then((createdOrderitem) => {
        res.status(201).json(createdOrderitem)
    })
    .catch((err) => {
        res.status(500).json({
            message:err.message,
            success:false
        })
    })
    // res.send(newOrderitem);
})

module.exports = router