const mongoose = require('mongoose');
const postschema=new mongoose.Schema({
    image:String,
    caption:String

})
const ModelName= mongoose.model("posts",postschema)
module.exports = ModelName;