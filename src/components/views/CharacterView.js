import React, { useEffect, useState } from "react";
import "./Character.css"


export const CharacterInfo = () => {
    const [characters, setCharacter ] = useState([]);
    const [expanded, setExpanded] = useState([]);
    
//when the component mounts
    useEffect(() => {
        fetch("http://localhost:8088/players")
            .then((response) => response.json())
            .then((PlayerArray) => {
               setCharacter(PlayerArray); 
            })
    }, []);
    const toggleExpanded = (characterId) => {
        setExpanded((prevState) => ({
            ...prevState,
            [characterId]: !prevState[characterId],
        }));
    };

    return (
        <>
        <div className="player_container">
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/268px-Playstation_logo_colour.svg.png"
        alt="PlayStation Logo"
        className="top_right_image"
    />
            <div className="character_container">
            {characters.map((character) => (
                <div key={character.id} className="player_container">
                    <p className="player_title">{character.name}</p>
                    <p className="player_type">{character.type}</p>
                    <p className="player_morality">{character.morality}</p>
                    <img src={character.image} alt="image" className="player_image" />
                    <p>  </p>
                    <button
                        onClick={() => toggleExpanded(character.id)}
                        className="player_button"
                    >
                            {expanded[character.id] ? "Hide Lore" : "Lore"}
                    </button>
                        {expanded[character.id] && (
                        <p className="player_lore">{character.lore}</p>
            )}

                    </div>
            ))}
            </div>
             </div></>
             
    )
}