const express = require("express");
const app = express();
const connector = require('./DBConnect')
require("dotenv").config();
app.use(express.json());
app.use('/products',require('./Routes/Routes'))
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
/* 
once server is running access http://localhost:8081/getproducts to have the products logged in console 
use /newproduct/ for a post operation to add a new product.
use /changeproduct to update an existing product
use /deleteproduct to delete an existing product
*/