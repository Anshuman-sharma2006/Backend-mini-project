const mongoose = require('mongoose');


const album=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    music:[{
        type:mongoose.Schema.ObjectId,
        ref:"music"
    }],
    artist:[{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:true
    }]

})
 const Albummodel= mongoose.model("Album",album)
 module.exports=Albummodel;
