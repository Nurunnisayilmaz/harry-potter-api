const Character = require("../models/characterModel");
const Movie = require("../models/movieModel");
const Spell = require("../models/spellModel");
const mongoose = require('mongoose');
const fs = require("fs");

mongoose.connect('mongodb+srv://nisa:55785578nN@cluster0.vic2c.mongodb.net/harryPotterApi?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log("Success!.MongoDB connected.")
    })
    .catch((error) => {console.error("MongoDb connection failed: " , error)})


const mockCharacter = JSON.parse(fs.readFileSync("./charactersMockData.json" ));
const mockMovie = JSON.parse(fs.readFileSync("./moviesMockData.json" ));
const mockSpell = JSON.parse(fs.readFileSync("./spellsMockData.json" ));


async function createMovieMockDatas(){
    const movies = await Movie.find()

    if (movies.length > 0) return

    try {
        await Movie.create(mockMovie);
        console.log('saved succesfully')
    } catch (err){
        console.log(err)
    }

}

async function createCharacterMockDatas(){
    const characters = await Character.find()

    if (characters.length > 0) return

    try {
        await Character.create(mockCharacter);
        console.log('saved succesfully')
    } catch (err){
        console.log(err)
    }

}
async function createSpellMockDatas(){
    const spells = await Spell.find()

    if (spells.length > 0) return

    try {
        await Spell.create(mockSpell);
        console.log('saved succesfully')
    } catch (err){
        console.log(err)
    }

}


createMovieMockDatas();
createCharacterMockDatas();
createSpellMockDatas();