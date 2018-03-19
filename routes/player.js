const express = require("express");
const playerRouter = express();
const playerModel = require("../models/player");

playerRouter.route("/")
    .get((req, res) => {
        playerModel.find({user: req.user._id}, (err, foundPlayer) => {
            if (err) {
                console.log(err);
            } else {
                res.send(foundPlayer)
            }
        })
    })
    .post((req, res) => {
        let newPlayer = new playerModel(req.body);
        newPlayer.user = req.user._id;
        newPlayer.save((err, newPlayer) => {
            if (err) {
                console.log(err);
            } else {
                res.send(newPlayer)
            }
        })
    })
playerRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        playerModel.findOne({ _id: id, user: req.user._id }, (err, foundPlayer) => {
            if (err) {
                console.log(err);
            } else {
                res.send(foundPlayer)
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params
        playerModel.findOneAndRemove({_id: id, user: req.user._id}, (err, deletedPlayer) => {
            if (err) {
                console.log(err);
            } else {
                res.send(deletedPlayer)
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        playerModel.findOneAndUpdate({_id: id, user: req.user._id}, req.body.value, { new: true }, (err, updatedPlayer) => {
            if (err) {
                console.log(err);
            } else {
                res.send(updatedPlayer)
            }
        })
    })
    
module.exports = playerRouter