const getAllMovies = async (req, res) => {
    return res.status(200).json({status: 'success',message : "hello"})
}


module.exports = {getAllMovies};