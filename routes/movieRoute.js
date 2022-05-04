const express = require('express');
const router = express.Router();

const {movieValidate} = require('../middlewares/validation/movieValidation')
const {getAllMovies} = require('../controllers/movieController');
const {addNewMovie} = require('../controllers/movieController');
const {deleteMovie} = require('../controllers/movieController');
const {updateMovie} = require('../controllers/movieController');
const {getMovieDetails} = require('../controllers/movieController');

router.get('/allMovies', getAllMovies);
router.post('/newMovie',movieValidate(), addNewMovie);
router.delete('/:id', deleteMovie);
router.put('/:id',movieValidate(), updateMovie);
router.get('/:id', getMovieDetails);

module.exports = router;