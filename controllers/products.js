//Defining all the routes.

const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"I am getAllProduct"});
};

const getAllProductTesting = async(req,res)=>{
    res.status(200).json({msg:"I am getAllProductTesting"});
};

module.exports = {getAllProducts,getAllProductTesting};