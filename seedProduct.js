require('dotenv').config()
const csv = require('csvtojson')
const connectDB = require('./database/connect')
const Product = require('./models/product')

const grabProductData = async() => {
    const jsonArray = await csv().fromFile('./prodcuts.csv')
    const products = jsonArray.map((item) => {
       const {product_name, price, quantity} = item
       return {product_name, price, quantity}
    })
    const productsJson = JSON.parse(JSON.stringify(products))
    return productsJson
}

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        const initialProducts = await grabProductData()
        await Product.create(initialProducts)
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
     
    
}
start()



