const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt")

const config = require("./config")



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017",()=>{
    console.log("Connected to MongoDB")
})
// middleware
app.use(bodyParser.json());

//app.use
app.use("/auth", require("./routes/auth"));
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/spells", require("./routes/spells"))
app.use("/api/player", require("./routes/player"))
//app.listener
app.listen(config.port, ()=>{
    console.log("Listening on port " + config.port)
})