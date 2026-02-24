//Cookies we save data hr req ke sath data server pr jata hain->server accces and each request cookies goes  to server
// it contain the logics of Api

const usermodel=require('../model/user.model')
const jwt = require('jsonwebtoken');
 
console.log("Register API Hit");

    const register=async (req,res) => {
    const{username,email,pass}=req.body;
    const user =await usermodel.create({
        username,email,pass
    })
    // todo token need object(currly braces) form and contain two conditon data should be unique and have the data of that user
    const token=jwt.sign({id:user._id},process.env.JWT_Secrt)// here jsonwebtoken take part and it sign then check userid with every requesr userhave own id rhat check encrypted by ur jwt_token that is that user have not any fake token  verify the token and encrypt the token 
    res.cookie("tokens",token)
    res.status(201).json({
        message:"HereRegisterSucessful",
        user,
        token
    })
};


    

module.exports={ register };
