let express = require('express')
let router = express.Router()
let controller = require('../Controllers/controller')

router.get('/', (req,res)=>{
    controller.getProducts(req,res)
})
router.post('/newproduct', (req,res)=>{
    controller.newProduct(req,res)
})
router.put('/changeproduct', (req,res)=>{
    controller.changeProduct(req,res)
})
router.delete('/deleteproduct', (req,res)=>{
    controller.deleteProduct(req,res)
})
module.exports = router
// routes are defined here and exported to be used in server.js
// each route calls a function from the controller which has been imported