const  express=require('express')
const authmiddelware=require('../middlewares/auth.middlewares')
const multer=require('multer')
const MusicController=require("../controller/music.controller")

const router= express.Router()
const upload=multer({
    Storage:multer.memoryStorage()
})
router.post("/upload" ,authmiddelware.authArtist,upload.single("music"),MusicController.createmusic)
router.post("/album",authmiddelware.authArtist,MusicController.createAlbum)
router.get("/",authmiddelware.authUser,MusicController.GetMusic)
router.get("/album",authmiddelware.authUser,MusicController.GetAlbum,MusicController.GetAlbumId)
router.get("/album/:albumId",authmiddelware.authUser,MusicController.GetAlbumId)

 module.exports=router