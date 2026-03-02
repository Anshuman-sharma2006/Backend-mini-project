const {ImageKit}=require('@imagekit/nodejs')
const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
})
const uploadFile =async (file) => {
    const res=await imagekit.files.upload({
        file,
        fileName:"music"+Date.now(),
        folder:"backend/music"
    })
    return res
}
module.exports={ uploadFile }