const express = require('express');
const router = express.Router();

const {getAllMovies} = require('../controllers/movieController');
const {addNewMovie} = require('../controllers/movieController');
const {deleteMovie} = require('../controllers/movieController');
const {updateMovie} = require('../controllers/movieController');
const {getMovieDetails} = require('../controllers/movieController');

router.get('/allMovies', getAllMovies);
router.post('/newMovie', addNewMovie);
router.delete('/:id', deleteMovie);
router.put('/:id', updateMovie);
router.get('/:id', getMovieDetails);

module.exports = router;