const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    characters : {
        type: Array
    },
    spells : {
        type: Array
    },
    image : {
        type: String
    }
},{ timestamps: {createdAt: 'createdTime', updatedAt: 'updatedTime'}});

MovieSchema.index({name: 'text', description: 'text'})

module.exports = mongoose.model('Movie', MovieSchema);