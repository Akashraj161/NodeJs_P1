//Defining all the routes.
const Product = require("../models/product")

const getAllProducts = async(req,res)=>{

    const {company , name } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = { $regex : company , $options : "i"};
    }

    if(name){
        queryObject.name = { $regex : name , $options : "i"};
    }


    const myData = await Product.find(queryObject);
    res.status(200).json({myData});
};

const getAllProductTesting = async(req,res)=>{
    const myData = await Product.find({company: "apple"});
    res.status(200).json({myData});
};


module.exports = {getAllProducts,getAllProductTesting};