const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    movies : {
        type: Array
    },
    actor : {
        type: String
    },
    image : {
        type: String
    }
},{timestamps: false});

CharacterSchema.index({name: 'text', description: 'text', actor: 'text'})

module.exports = mongoose.model('Character', CharacterSchema);