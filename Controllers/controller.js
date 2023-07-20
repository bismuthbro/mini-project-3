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
productsModel.find({})
.then((response)=>{
    if(response.length === 0){init()}
})

exports.getProducts = (req,res)=>{
    productsModel.find({})
    .then((response)=>{res.json({data:response});
    console.log(response)
})
    .catch((error)=>{res.json({error})})
}
exports.newProduct = (req,res)=>{
    const addProduct = new productsModel(req.body)
    addProduct.save()
    .then(()=>res.send('successfully created'))
    .catch((error)=>{res.json({error})})
}
exports.changeProduct = (req,res)=>{
    productsModel.findOneAndUpdate({id:req.body.id},req.body.update)
    .then(()=>res.send('successfully updated'))
    .catch((error)=>{res.json({error})})
}
exports.deleteProduct = (req,res)=>{
    productsModel.findOneAndDelete({id:req.body.id})
    .then(()=>res.send('successfully deleted'))
    .catch((error)=>{res.json({error})})
}