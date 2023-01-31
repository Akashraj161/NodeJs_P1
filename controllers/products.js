//Defining all the routes.
const Product = require("../models/product")

const getAllProducts = async(req,res)=>{
    const myData = await Product.find({});
    res.status(200).json({myData});
};

const getAllProductTesting = async(req,res)=>{
    const myData = await Product.find({company: "apple"});
    res.status(200).json({myData});
};


module.exports = {getAllProducts,getAllProductTesting};