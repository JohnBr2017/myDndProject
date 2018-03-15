const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
    spellName: String,
    description: [String],
    higher_level: [String],
    page: String,
    range: String,
    components: String,
    material: [String],
    ritual: String,
    duration: String,
    casting_time: String,
    level: String,
    school: String,
    classes: [String],

});

module.exports = mongoose.model("Spells", SpellSchema)