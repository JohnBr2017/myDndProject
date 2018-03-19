const mongoose = require("mongoose");
const Schema = mongoose.Schema

const playerSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },
    playerClass: {
        type: String,
        required: true
    },
    listOfSpells: [{ 
        spellName: String,
        description: [String],
        higher_level: [String],
        page: String,
        range: String,
        components: String,
        material:[{
            type: String,
            default: ""
        }],
        ritual: String,
        duration: String,
        casting_time: String,
        level: String,
        school: String,
        classes: [String],
        _id: String
    
    }],
    active: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Player", playerSchema)