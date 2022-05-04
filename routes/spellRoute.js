const express = require('express');
const router = express.Router();

const {getAllSpells} = require('../controllers/spellController');
const {addNewSpell} = require('../controllers/spellController');
const {deleteSpell} = require('../controllers/spellController');
const {updateSpell} = require('../controllers/spellController');
const {getSpellDetails} = require('../controllers/spellController');

router.get('/allSpells', getAllSpells);
router.post('/newSpell', addNewSpell);
router.delete('/:id', deleteSpell);
router.put('/:id', updateSpell);
router.get('/:id', getSpellDetails);

module.exports = router;