const express = require('express');
const jwt = require('jsonwebtoken');
const usermodel = require('../model/user.model');
const router = express.Router()
router.post("/create",async (req,res)=>{
    const token=req.cookies.tokens;

    if(!token){
        return res.send("HereErrorNotHavingToken")

    }
    else if(true){res.send("here created succesully")}
    try {
        const decod=jwt.verify(token,process.env.JWT_Secrt)
        const user= await usermodel.findOne({
            _id:decod.id
        })
        console.log(user);
        
        
    }
        
    catch (error) {
        return res.status(201).json({"message":"Here The Error",Tokens:token});
        
    }

    

})
module.exports=router;