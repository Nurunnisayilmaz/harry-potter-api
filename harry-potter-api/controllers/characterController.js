const Character = require('../models/characterModel')

const getAllCharacters = async (req, res) => {
    try {
        const allCharacters = await Character.find();
        return res.status(200).json({status: 'success', allCharacters: allCharacters})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }
}

const addNewCharacter = async (req, res) => {
    const {name, description, movies, actor, image} = req.body;

    try {
        const data = await Character({
            name,
            description,
            movies,
            actor,
            image
        })
        data.save();
        return res.status(200).json({status: 'success', data: data})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const character = await Character.findOneAndRemove({
            _id: req.params.id,
        })
       return res.status(200).json({code: 200, success: true, message: "Delete character", deleteCharacter: character});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const updateCharacter = async (req, res) => {
    const data = req.body;
    try {
        const character = await Character.findOneAndUpdate({
            _id: req.params.id,
        }, {
            $set:
                {
                    name: data.name,
                    description: data.description,
                    movies: data.movies,
                    actor: data.actor,
                    image: data.image
                }
        })
        return res.status(200).json({
            code: 200,
            success: true,
            message: "Update character",
            updateCharacter: character
        });
    } catch (e) {
        console.log('err occured ')
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const getCharacterDetails = async (req, res) => {
    try {
        const character = await Character.find({
            _id: req.params.id,
        })

        return res.status(200).json({
            code: 200,
            success: true,
            message: "Character details",
            getCharacterDetails: character
        });
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports = {getAllCharacters, addNewCharacter, deleteCharacter, updateCharacter, getCharacterDetails};