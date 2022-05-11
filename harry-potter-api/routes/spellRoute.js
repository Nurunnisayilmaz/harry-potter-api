const express = require('express');
const router = express.Router();

const {spellValidate} = require('../middlewares/validation/spellValidation')
const {getAllSpells} = require('../controllers/spellController');
const {addNewSpell} = require('../controllers/spellController');
const {deleteSpell} = require('../controllers/spellController');
const {updateSpell} = require('../controllers/spellController');
const {getSpellDetails} = require('../controllers/spellController');

router.get('/allSpells', getAllSpells);
router.post('/newSpell',spellValidate(), addNewSpell);
router.delete('/:id', deleteSpell);
router.put('/:id',spellValidate(), updateSpell);
router.get('/:id', getSpellDetails);

module.exports = router;