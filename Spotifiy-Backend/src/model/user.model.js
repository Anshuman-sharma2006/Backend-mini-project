const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     Username:{
        type:String,
        required:true,
        unique:true
     },
     Email:{
        type:String,
        required:true,
        unique:true
     },
     Password:{
        type:String,
        required:true
     },
     role:{
        type:String,
        enum:["user","artist"], //when u have two option then we use enum for options
        default:"users",
     }
    

})
const UserModel= mongoose.model("Users",userSchema)
module.exports=UserModel;