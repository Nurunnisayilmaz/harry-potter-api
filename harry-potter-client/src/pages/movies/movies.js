import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../../config/moviesConfig";
import "./movies.css"

function Movie() {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            let allMovies = await axios.get(`${server.localApi}/movie/allMovies`);
            if (allMovies.error){
                console.log("Error Occured while fetching datas")
            }
            setMovies(allMovies.data.allMovies)
        }

        // call the function
        fetchData().catch(console.error);
        console.log(movies)
    }, [JSON.stringify(movies)])

    return (
        <div className="App">

            {
                movies.map((element) => (

                        <div className="containerMovie ">
                            <div className="movie-text">
                                <h3 className="">{element.name}</h3>
                                <div className="movieDescription ">{element.description}</div>
                                <a href={`/movie-details/${element._id}`} >Continue reading</a>
                            </div>
                            <div className="img-field-movie">

                                <img className="imageMovies" src={element.image} className="img-fluid"
                                     alt="imageMovies"></img>

                            </div>
                        </div>


                ))
            }

        </div>
    );
}

export default Movie;
