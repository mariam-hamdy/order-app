const csv = require('csvtojson')
const Product = require('./models/product')
//require('dotenv').config()

const grabProductData = async() => {
    const jsonArray = await csv().fromFile('./prodcuts.csv')
    const products = jsonArray.map((item) => {
       const {product_name, price, quantity} = item
       return {product_name, price, quantity}
    })
    const productsJson = JSON.parse(JSON.stringify(products))
    return productsJson
}

const seedProducts = async() => {
    try {
        //await connectDB(process.env.MONGO_URL)
        const initialProducts = await grabProductData()
        await Product.create(initialProducts)
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
     
    
}
seedProducts()



