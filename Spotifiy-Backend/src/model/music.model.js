const mongoose=require('mongoose')
 const mongoSchema=new mongoose.Schema({
    uri:{
        type:String,
        require: true
    },
    title:{
        type:String,
        require: true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,//id of the artis of the user here it save
        ref:"Users",//collection of Data Base Where Artist is save
        require: true
    }
 })
 const musicmodel= mongoose.model("Music",mongoSchema)
 module.exports=musicmodel;