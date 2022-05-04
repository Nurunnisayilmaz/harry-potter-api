const express = require('express');
const router = express.Router();

const {getAllCharacters} = require('../controllers/characterController');
const {addNewCharacter} = require('../controllers/characterController');
const {deleteCharacter} = require('../controllers/characterController');
const {updateCharacter} = require('../controllers/characterController');
const {getCharacterDetails} = require('../controllers/characterController');

router.get('/allCharacters', getAllCharacters);
router.post('/newCharacter', addNewCharacter);
router.delete('/:id', deleteCharacter);
router.put('/:id', updateCharacter);
router.get('/:id', getCharacterDetails);


module.exports = router;