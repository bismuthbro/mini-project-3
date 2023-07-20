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
// once server is running acces http://localhost:8081/getproducts to have the products logged in console and add /(productidhere) for a specific product