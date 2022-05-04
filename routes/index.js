const express = require('express');
const router = express.Router();

const movie = require('../routes/movieRoute')
const character = require('../routes/characterRoute')
const spell = require('../routes/spellRoute')

router.use('/movie', movie);
router.use('/character', character);
router.use('/spell', spell);

module.exports = router;