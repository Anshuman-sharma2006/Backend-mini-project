const musicmodel = require("../model/music.model");
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");
const createmusic = async (req, res) => {
  const token = req.cookies.Tokens;
  if (!token) {
    return res.status("401").send("NotAlllowedToCreatedByUSer");
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_Secrt);
    if (decode.role !== "artist") {
      return res.send("Here The User Have Not Access Is Valid");
    }
    const { title } = req.body;
    const file = req.file;
    const resultf = await uploadFile(file.buffer.toString("base64"));
    console.log("Here The Resultf:", resultf);

    const music = await musicmodel.create({
      uri: resultf.uri,
      title,
      artist: decode.id,
    });
    res.status(201).json({
      message: "Music Created Succesfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (e) {
    res.send("Here The Token Is NOt Valid");
  }
};
module.exports = { createmusic };
