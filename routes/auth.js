const express = require("express");
const User = require("../models/users");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res) => {
    User.findOne({username: req.body.username}, (err, extistingUser) =>{
        if(err) return res.status(500).send({success: false, err});
        if(extistingUser !== null) {
            return res.status(400).send({success: false, err: "Username already exists"});
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if(err) return res.status(500).send({success: false, err});
            const token = jwt.sign(user.toObject(), process.env.SECRET);
            return res.status(201).send({success: true, user: user.toObject(), token});
        });
    });
});

authRouter.post("/signin", (req, res) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) return res.status(500).send(err);
        if(!user || user.password !== req.body.password) {
            return res.status(403).send({success: false, err: "Username or password is incorrect!!!"})
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.send({token: token, user: user.toObject(), success: true})
    });
});

module.exports = authRouter;

// // routes/auth.js

// const express = require("express")  
// const User = require("../models/user");  
// const authRouter = express.Router();  
// const jwt = require("jsonwebtoken");

// authRouter.post("/signup", (req, res) => {  
//     User.findOne({username: req.body.username}, (err, existingUser) => {
//         if (err) return res.status(500).send({success: false, err});
//         if (existingUser !== null) {
//             return res.status(400).send({success: false, err: "That username already exists!"});
//         }
//         const newUser = new User(req.body);
//         newUser.save((err, user) => {
//             if (err) return res.status(500).send({success: false, err});
//             const token = jwt.sign(user.toObject(), process.env.SECRET);
//             return res.status(201).send({success: true, user: user.toObject(), token});
//         });
//     });
// });

// authRouter.post("/login", (req, res) => {  
//     User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
//         if (err) return res.status(500).send(err);
//         if (!user || user.password !== req.body.password) {
//             return res.status(403).send({success: false, err: "Email or password are incorrect"})
//         }
//         const token = jwt.sign(user.toObject(), process.env.SECRET);
//         return res.send({token: token, user: user.toObject(), success: true})
//     });
// });

// module.exports = authRouter; 