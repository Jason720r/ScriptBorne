import React, { useEffect, useState } from "react";


export const CharacterInfo = () => {
    const [characters, setCharacter ] = useState([]);
    const [expanded, setExpanded] = useState([]);
    

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
            <div className="player_view">Characters</div>
            {characters.map((character) => (
                <div key={character.id}>
                    <p className="player_title">{character.name}</p>
                    <p className="player_type">{character.type}</p>
                    <p className="player_morality">{character.morality}</p>
                    <button
                        onClick={() => toggleExpanded(character.id)}
                        className="toggle_button"
                    >
                            {expanded[character.id] ? "Hide Lore" : "Show Lore"}
                    </button>
                        {expanded[character.id] && (
                        <p className="player_lore">{character.lore}</p>
            )}

                    </div>
            ))}
             </div></>
    )
}