const mongoose=require("mongoose")

const connectdb=async () => {
    try{ await mongoose.connect(process.env.mongoose_uri)

        console.log("connect Database");
    }

catch(error){
    console.error("error found",error.message);
    process.exit(1);// Stop the app because something critical failed
    
}}

module.exports=connectdb;
// async function connectdb() {
//     try {
//         await mongoose.connect("mongodb+srv://Yt:NtT-vh%24U8i%40JhB%25@backend-yt.sm7zujb.mongodb.net/project-1");

//         console.log("here connection  done sucessfully");
    
//     }
    
//      catch (error) {
//     console.error("here Errror Msg:",error.msg);
//     process.exit(1);
        
//     }
    
// }