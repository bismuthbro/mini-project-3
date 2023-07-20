const axios = require('axios')
const productsModel = require('../Model/ProductModel')
function init () {
    axios.get('https://fakestoreapi.com/products')
    .then((response)=> {
        response.data.forEach((product)=> {
            const newProduct = new productsModel(product)
            newProduct.save()
        })
    })    
}
// the schema is imported from models so operations can be done on the database
// an init function is defined using axios to get data from the API and initialize the database, saving the API's data to it
productsModel.find({})
.then((response)=>{
    if(response.length === 0){init()}
})
// this piece of code checks if there are any existing entries in the database, if there are it won't copy the API's data to prevent duplicates when closing and reopening the server
exports.getProducts = (req,res)=>{
    productsModel.find({})
    .then((response)=>{res.json({data:response});
    console.log(response)
})
    .catch((error)=>{res.json({error})})
}
// sends the entire list of products back to the user
exports.newProduct = (req,res)=>{
    const addProduct = new productsModel(req.body)
    addProduct.save()
    .then(()=>res.send('successfully created'))
    .catch((error)=>{res.json({error})})
}
// adds a new product, this does not require all fields to be not null
exports.changeProduct = (req,res)=>{
    productsModel.findOneAndUpdate({id:req.body.id},req.body.update)
    .then(()=>res.send('successfully updated'))
    .catch((error)=>{res.json({error})})
}
// changes a product based on it's ID, the user can change as many or as little fields as they like
exports.deleteProduct = (req,res)=>{
    productsModel.findOneAndDelete({id:req.body.id})
    .then(()=>res.send('successfully deleted'))
    .catch((error)=>{res.json({error})})
}
// deletes a product based on it's ID
