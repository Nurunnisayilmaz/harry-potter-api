const Movie = require('../models/movieModel')

const getAllMovies = async (req, res) => {

    try {
        const allMovies = await Movie.find();
        return res.status(200).json({status: 'success', allMovies: allMovies})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }

}
const addNewMovie = async (req, res) => {

    const {name, description, characters, spells, image} = req.body;

    try {
        const data = await Movie({
            name,
            description,
            characters,
            spells,
            image
        })
        data.save();
        return res.status(200).json({status: 'success', data: data})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }

}
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndRemove({
            _id: req.params.id,
        })
        return res.status(200).json({code: 200, success: true, message: "Delete movie", deleteMovie: movie});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const updateMovie = async (req, res) => {
    const data = req.body;
    try {
        const movie = await Movie.findOneAndUpdate({
            _id: req.params.id,
        }, {
            $set:
                {
                    name: data.name,
                    description: data.description,
                    characters: data.characters,
                    spells: data.spells,
                    image: data.image
                }
        })
        return res.status(200).json({code: 200, success: true, message: "Update movie", updateMovie: movie});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const getMovieDetails = async (req, res) => {
    try {
        const movie = await Movie.find({
            _id: req.params.id,
        })
        return res.status(200).json({code: 200, success: true, message: "Movie details", getMovieDetails: movie});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports = {getAllMovies, addNewMovie, deleteMovie, updateMovie, getMovieDetails};