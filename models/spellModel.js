const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
    _id : {
        type: Number,
        required:true
    },
    name : {
        type: String,
        required: true
    },
    description : {
        type: String
    },
   movies : {
        type: Array
   }
},{timestamps: false});

SpellSchema.index({name: 'text', description: 'text'})

module.exports = mongoose.model('Spell', SpellSchema);