import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import {server} from "../../config/spellsConfig";
import "./spells.css";

function Spell() {

    const [spells, setSpells] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            let allSpells = await axios.get(`${server.localApi}/spell/allSpells`);
            if (allSpells.error){
                console.log("Error Occured while fetching datas")
            }
            setSpells(allSpells.data.allSpells)
        }

        // call the function
        fetchData().catch(console.error);
        console.log(spells)
    }, [JSON.stringify(spells)]) //getirilen datanın tekrarla


    return (
        <div className="App">

            { spells.map((element) => (

            <div className="containerSpell">
                <div className="spell-text">
                    <h3 className="">{element.name}</h3>
                    <div className="spellDescription ">{element.description}</div>
                    <a href={`/spell-details/${element._id}`} className="stretched-link">Continue reading</a>
                </div>
            </div>

            ))
            }

        </div>
    );
}

export default Spell;

