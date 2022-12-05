const express = require('express');
const morgan = require('morgan')
const Product= require('./models/products')
const mongoose= require('mongoose')
require('dotenv/config');
const app = express();
const api=process.env.API_URL
const productsRouter=require('./routers/products')
const categoriesRouter=require('./routers/categories')
const usersRouter=require('./routers/users')
const orderitemsRouter=require('./routers/orderitems')
const ordersRouter=require('./routers/orders')
const cors=require('cors')

app.use(cors())
app.options('*',cors)

//middleware
app.use(express.json())
app.use(morgan('tiny'))

app.use(`${api}/products`,productsRouter)
app.use(`${api}/categories`,categoriesRouter)
app.use(`${api}/users`,usersRouter)
app.use(`${api}/orders`,ordersRouter)


mongoose.connect(process.env.MONGOOSE_LINK)
.then((e)=> {console.log('is connected')})
.catch((err)=>{
    console.log(err)
})
app.listen(3000, () => {
    console.log(api+'starting server at http://localhost:3333')
})
    
