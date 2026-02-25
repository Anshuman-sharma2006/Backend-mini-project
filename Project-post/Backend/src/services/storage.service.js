const ImageKit = require("imagekit");
require("dotenv").config(); 

const imagekit=new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY

})
 const uploadFile=async (buffer) => {
const result=await imagekit.upload({
 file:buffer.toString("base64"),
 fileName:"image.jpg"
})
    return result
}
module.exports=uploadFile