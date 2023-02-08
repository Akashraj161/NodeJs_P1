//Defining all the routes.
const Product = require("../models/product")

const getAllProducts = async(req,res)=>{

    const {company , name , sort , select } = req.query;
    const queryObject = {};

    // Filter the document on basic of name and company.

    if(company){
        queryObject.company = { $regex : company , $options : "i"};
    }

    if(name){
        queryObject.name = { $regex : name , $options : "i"};
    }

    let apiData = Product.find(queryObject);

    //Sort Functionality
     
    if(sort){
        //let sortUrlFix = sort.replace(","," ");
        let sortUrlFix = sort.split(",").join(" ");
        // console.log(sortUrlFix);
        apiData = apiData.sort(sortUrlFix);
    }

    // Return specific document field using SELECT

    if(select){
        //let sortUrlFix = sort.replace(","," ");
        let selectUrlFix = select.split(",").join(" ");
        // console.log(sortUrlFix);
        apiData = apiData.select(selectUrlFix);
    }

    // Pagination code

    let page = Number(req.query.page)|| 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1)*limit;

    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({myData , nbHits:myData.length});
};

const getAllProductTesting = async(req,res)=>{
    const myData = await Product.find({}).select("name")
    res.status(200).json({myData});
};


module.exports = {getAllProducts,getAllProductTesting};