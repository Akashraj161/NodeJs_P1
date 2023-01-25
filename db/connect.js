const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
uri = "mongodb+srv://Akash:AkashRaj1611@project1nodejs.8rcpaan.mongodb.net/Project1NodeJs?retryWrites=true&w=majority";

const connectDb = ()=>{
    console.log("connect Db");
    return mongoose.connect(uri , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
       
    });
};


module.exports = connectDb;