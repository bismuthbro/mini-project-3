const mongoose = require('mongoose')
let Schema = mongoose.Schema
let ProductSchema = new Schema({
    id: mongoose.Schema.Types.Number,
    title: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.Decimal128,
    description: mongoose.Schema.Types.String,
    category: mongoose.Schema.Types.String,
    image: mongoose.Schema.Types.String,
    rating: Object,
})
let productsModel = mongoose.model('products', ProductSchema)
module.exports = productsModel