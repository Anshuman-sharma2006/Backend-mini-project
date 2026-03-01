//! Request Inside Data-> We Can Read, And Also We Can Modify Data , And Send Response
const jwt=require('jsonwebtoken')
const authArtist=async (req,res,next) => {
const token = req.cookies.Tokens;
    
  if (!token) {
    return res.status(401).send("NotAlllowedToCreatedByUSer");
  }
  try{
    const decode = jwt.verify(token, process.env.JWT_Secrt);
    if (decode.Role !== "artist") {
    return res.send("Access Denied");
  }
  req.user=decode;
  next()//Transfer The Data From next row we used in routes
  }catch(err){
    console.log(err);
    res.status(401).json({
    message:"unauthorized"
    })
    
  }

    
};
module.exports={authArtist};