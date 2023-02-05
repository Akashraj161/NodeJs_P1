//Defining all the routes.
const Product = require("../models/product")

const getAllProducts = async(req,res)=>{

    const {company , name , sort , select } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = { $regex : company , $options : "i"};
    }

    if(name){
        queryObject.name = { $regex : name , $options : "i"};
    }

    let apiData = Product.find(queryObject);
     
    if(sort){
        //let sortUrlFix = sort.replace(","," ");
        let sortUrlFix = sort.split(",").join(" ");
        // console.log(sortUrlFix);
        apiData = apiData.sort(sortUrlFix);
    }
    if(select){
        //let sortUrlFix = sort.replace(","," ");
        let selectUrlFix = select.split(",").join(" ");
        // console.log(sortUrlFix);
        apiData = apiData.select(selectUrlFix);
    }

    const myData = await apiData;
    res.status(200).json({myData});
};

const getAllProductTesting = async(req,res)=>{
    const myData = await Product.find({}).select("name")
    res.status(200).json({myData});
};


module.exports = {getAllProducts,getAllProductTesting};