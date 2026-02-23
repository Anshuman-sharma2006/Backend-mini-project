const express=require('express');
const app=express() // now here we connect express 
app.use(express.json()) // Middelware of express(convert json file understandble by exress)
 const notes=[]
//here we check the http request we putting is correct
 app.post("/notes",(req,res)=>{ // here post is used to create inside server 
    console.log(req.body);
    notes.push(req.body)//here by using postman we used their body to created that body by selcting json
    res.status(201).json({   //here res is all thing show in postman terminal by staus and json output
        "message":"node created sucessfully"
    })
 })
 app.get("/notes",(req,res)=>{ // here get is used to fetch data frm server
    res.status(201).json({
        "message":"Showing the node data",
        "notes":notes
    })
 })
 app.delete("/notes/:id",(req,res)=>{// here del is used to delted (:)after this wrks dynamically
    const id=req.params.id //here we take id from parm
    delete notes[id]
    res.status(200).json({
       "Message":"The Message Deleted Sucessfully  "

    })
 })
module.exports=app