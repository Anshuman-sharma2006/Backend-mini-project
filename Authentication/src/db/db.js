const mongoose=require("mongoose")

const connectdb=async () => {
    try{ await mongoose.connect(process.env.mongo_url)

        console.log("connect Database");
    }

catch(error){
    console.error("error found",error.message);
    process.exit(1);// Stop the app because something critical failed
    
}}

module.exports=connectdb;