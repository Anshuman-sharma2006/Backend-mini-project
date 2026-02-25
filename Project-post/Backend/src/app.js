const express=require("express")
const app=express()
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const Postmodel = require('./models/post.model');
const cors = require('cors');
app.use(cors())
app.use(express.json())
const upload=multer({storage:multer.memoryStorage()})
app.post("/create-post",upload.single("Image"), async (req,res)=>{
    // console.log("here the  body",req.body);
    // console.log("here the  file=>",req.file);
    // console.log("here the buffer file",req.file.buffer);
    // Upload image and get URL
    const imageURL=await uploadFile(req.file.buffer)
    // console.log(imageURL);
      // Save to MongoDB
    const post = await Postmodel.create({
        image: imageURL.url,
        caption: req.body.caption
    })

    
    res.status(200).json({
        Message:"Created the post sucessfully",
        post
    })
    
})
app.get("/post",async (req,res)=>{
    const posts= await Postmodel.find()
    res.status(200).json({
        message:"Post Fetch Sucessfully",
        posts
    })



})
module.exports=app