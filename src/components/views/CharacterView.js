import React, { useEffect, useState } from "react";


export const CharacterSelect = () => {
    const [characters, setCharacter ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/players")
            .then((response) => response.json())
            .then((PlayerArray) => {
               setCharacter(PlayerArray); 
            })
    }, []);

    return (
        <>
        <div className="player_container">
            <div className="player_view">Characters</div>
            {characters.map((character) => (
                <div key={character.id}>
                    <p className="player_title">{character.name}</p>
                    </div>
            ))}
             </div></>
    )
}