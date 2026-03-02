const mongoose = require('mongoose');
const connectdb=async() => {
    try{
        await mongoose.connect(process.env.mongo_url);
        console.log('hereTheMongoDbConnect');
        
    }catch(e){
        console.log("MongoDb Not Connect",e.message);
        
    }
    
}
module.exports=connectdb;