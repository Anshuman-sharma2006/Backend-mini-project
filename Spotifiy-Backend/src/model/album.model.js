const mongoose = require('mongoose');


const album=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    music:[{
        type:mongoose.Schema.ObjectId,
        ref:"Music"
    }],
    artist:[{
        type:mongoose.Schema.ObjectId,
        ref:"Users",
        required:true
    }]

})
 const Albummodel= mongoose.model("Album",album)
 module.exports=Albummodel;
