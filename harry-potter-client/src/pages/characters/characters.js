import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../../config/characterConfig";
import "./character.css"

function Character() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            let allCharacters = await axios.get(`${server.localApi}/character/allCharacters`);
            if (allCharacters.error){
                console.log("Error Occured while fetching datas")
            }
            setCharacters(allCharacters.data.allCharacters)
        }

        // call the function
        fetchData().catch(console.error);
        console.log(characters)
    }, [JSON.stringify(characters)]) //getirilen datanın tekrarla



    return (
        <div className="App">

            {
                characters.map((element) => (

                    <div className="containerCharacter ">
                        <div className="character-text">
                            <h3 className="">{element.name}</h3>
                            <div className="characterDescription ">{element.description}</div>
                            <a href={`/character-details/${element._id}`} className="stretched-link">Continue reading</a>
                        </div>
                        <div className="img-field-character ">

                            <img className="imageCharacters" src={element.image} className="img-fluid"
                                 alt="imageCharacters"></img>

                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default Character;

