const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config")

const app = express();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017",()=>{
    console.log("Connected to MongoDB")
})
// middleware
app.use(bodyParser.json());
//routes
const spellsRoute = require("./routes/spells")
const playerRoute = require("./routes/player")

//app.use
app.use("/spells", spellsRoute)
app.use("/player", playerRoute)
//app.listener
app.listen(config.port, ()=>{
    console.log("Listening on port " + config.port)
})