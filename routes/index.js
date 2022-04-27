const express = require('express');
const router = express.Router();

const movie = require('../routes/movieRoute')

router.use('/movie', movie);

module.exports = router;