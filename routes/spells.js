const express = require("express");
const selectedSpellsRouter = express();
const spellModel = require("../models/spells");

selectedSpellsRouter.route("/")
    .get((req, res) => {
        spellModel.find(req.query, (err, foundSpell) => {
            if (err) {
                console.log(err);
            } else {
                res.send(foundSpell)
            }
        })
    })
    // .post((req, res) => {
    //     let newSpell = new spellModel(req.body)
    //     newSpell.save((err, newSpell) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send(newSpell)
    //         }
    //     })
    // })
selectedSpellsRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        spellModel.findOne({ _id: id }, (err, foundSpell) => {
            if (err) {
                console.log(err);
            } else {
                res.send(foundSpell)
            }
        })
    })
    // .delete((req, res) => {
    //     let { id } = req.params
    //     spellModel.findByIdAndRemove(id, (err, deletedSpell) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send(deletedSpell)
    //         }
    //     })
    // })
    // .put((req, res) => {
    //     let { id } = req.params
    //     spellModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedSpell) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send(updatedSpell)
    //         }
    //     })
    // })

module.exports = selectedSpellsRouter