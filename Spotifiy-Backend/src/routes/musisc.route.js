const  express=require('express')
const multer=require('multer')
const MusicController=require("../controller/music.controller")
const router= express.Router()
const upload=multer({
    Storage:multer.memoryStorage()
})
router.post("/upload" ,upload.single("music"),MusicController.createmusic)

 module.exports=router