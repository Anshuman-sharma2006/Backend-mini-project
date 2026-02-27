//Server Creation ,All The MiddelWare We Requires ,are in This File
const express = require('express');
const cookiesParser = require('cookie-parser');
const authRoutes = require('./routes/auth.route');
const MusicRoutes=require("./routes/musisc.route")
const app=express();
app.use(express.json());
app.use(cookiesParser());

app.use("/api/auth",authRoutes)
app.use("/api/music",MusicRoutes)
module.exports=app;
