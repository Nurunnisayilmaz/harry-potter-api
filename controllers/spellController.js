const Spell = require('../models/spellModel')

const getAllSpells = async (req, res) => {
    try {
        const allSpells = await Spell.find();
        return res.status(200).json({status: 'success', allSpells: allSpells})
    } catch (e) {
        return res.status(201).json({code: 201, message: "something went wrong", error: e})
    }
}
const addNewSpell = async (req, res) => {
    const {name, description, movies} = req.body;
    try {
        const data = await Spell({
            name,
            description,
            movies
        })
        data.save();
        return res.status(200).json({status: 'success', data: data})

    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }

}
const deleteSpell = async (req, res) => {
    try {
        const spell = await Spell.findOneAndRemove({
            _id: req.params.id,
        })
        return res.status(200).json({code: 200, success: true, message: "Delete spell", deleteSpell: spell});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const updateSpell = async (req, res) => {
    const data = req.body;
    try {
        const spell = await Spell.findOneAndUpdate({
            _id: req.params.id,
        }, {
            $set:
                {
                    name: data.name,
                    description: data.description,
                    movies: data.movies,
                }
        })
        return res.status(200).json({code: 200, success: true, message: "Update spell", updateSpell: spell});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}
const getSpellDetails = async (req, res) => {
    try {
        const spell = await Spell.find({
            _id: req.params.id,
        })
        return res.status(200).json({code: 200, success: true, message: "Spell details", getSpellDetails: spell});
    } catch (e) {
        return res.status(404).json({code: 404, message: "Not Found", error: e})
    }
}

module.exports = {getAllSpells, addNewSpell, deleteSpell, updateSpell, getSpellDetails};

