const express = require("express");
const app = express();
const connectDb = require("./db/connect")

const port = process.env.PORT || 5000;

const products_route = require("./routes/product")

app.get("/",(req,res)=>{
    res.send("Yes, I am Live Now!!");
});


//Middleware or to set routers
app.use("/api/products", products_route);

const start = async()=>{
    try{
        await connectDb();
        app.listen(port,()=>{
           console.log( `${port} Yes I'm Connected`);
        })
    } catch(error){
        console.log(error);
    }
};

start();