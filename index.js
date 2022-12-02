const mongoose = require('mongoose')
const express = require('express')

require('dotenv').config()

async function main(){
    console.log("Connecting to MongoDB..!")
    
    await mongoose.connect(process.env.DBURL);
    
    console.log("Connected to MongoDB.")
    
    const app = express()
    app.use(express.json())
    app.use('/api/products', require('./src/api/products/route.js'))

    app.listen(3003, () => console.log("Server started."))
}

main()