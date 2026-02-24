//! It can have The routes where each and every thing have routes o where u get data and logic part is in controlllers
const express = require('express');
 const authcontroller = require('../controller/auth.controller');
const Router= express.Router();
// Post->api/auth/register (api/auth/ this requirement access)
Router.post("/Register",authcontroller.register)
Router.get("/test",(req,res)=>{
    console.log(req.cookies);
res.json({
    "Message":"here the cookies",
    "Tokens": req.cookies
})
})

module.exports=Router;