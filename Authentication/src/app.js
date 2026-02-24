 const express = require('express');
const authRoutes=require('./routes/auth.route')
const post=require("./routes/post.route")

const cookieParser = require('cookie-parser');
require('dotenv').config();
const app=express()
app.use(cookieParser());

app.use(express.json());
// /api/auth necessary to its a preffix
app.use("/api/auth",authRoutes)
app.use("/api/post",post)

module.exports=app;