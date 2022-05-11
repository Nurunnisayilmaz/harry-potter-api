const express = require('express');
const router = express.Router();

const {characterValidate} = require('../middlewares/validation/characterValidation')
const {getAllCharacters} = require('../controllers/characterController');
const {addNewCharacter} = require('../controllers/characterController');
const {deleteCharacter} = require('../controllers/characterController');
const {updateCharacter} = require('../controllers/characterController');
const {getCharacterDetails} = require('../controllers/characterController');

router.get('/allCharacters', getAllCharacters);
router.post('/newCharacter',characterValidate(), addNewCharacter);
router.delete('/:id', deleteCharacter);
router.put('/:id',characterValidate(), updateCharacter);
router.get('/:id', getCharacterDetails);


module.exports = router;