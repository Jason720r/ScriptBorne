import React, { useEffect, useState } from "react";
import "./Character.css"


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
            {/* <div className="player_view">Characters</div>
            <div className="image_container">
            <img
              src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjYiLCJIYWlyTG93ZXIiOiI0IiwiQ2FwZUJhY2siOiIxIiwiRXllcyI6IjI0IiwiU29ja3MiOiI0IiwiU2hvZXMiOiIyIiwiR2xvdmVzIjoiNiIsIlBhbnRzIjoiMSIsIlRvcCI6IjEzIiwiQ2FwZSI6IjQiLCJIYWlyIjoiNSIsInNraW5Ub25lIjoiY2ZiOGE5IiwiZXllc1RvbmUiOiJhNjI4NDEiLCJoYWlyVG9uZSI6IjZlMWExYSIsInBhbnRzVG9uZSI6IjA5MWEyMyIsInRvcFRvbmUiOiI0YjVhYTQiLCJ3aW5nc1RvbmUiOiI0YjVhYTQiLCJ3aW5nc1RvbmUyIjoiNmUxYTFhIiwic2hvZXNUb25lIjoiYjliOWI5IiwiaGF0VG9uZSI6Ijc3Mjg4MiIsImNhcGVUb25lIjoiNWYyYTgyIn0=/1/show.png"
              alt="PolterGuice"
              className="Abram"
            />

            <img
              src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJFeWVzIjoiMjYiLCJNb3V0aCI6IjQiLCJTaG9lcyI6IjEiLCJQYW50cyI6IjIiLCJUb3AiOiIxMyIsIkJlbHQiOiIxIiwiSGFpciI6IjE2Iiwic2tpblRvbmUiOiJmM2IwODQiLCJoYWlyVG9uZSI6Ijc4MzkzYiIsInRvcFRvbmUiOiIwMDAwMDAiLCJzaG9lc1RvbmUiOiJlZWVlZWUiLCJjYXBlVG9uZSI6IjFlMTU1MSJ9/1/show.png"
              alt="Jackson"
              className="Mclure"
            />

            <img
              src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJCb2R5IjoiMSIsIkV5ZXMiOiIyOCIsIlNvY2tzIjoiMSIsIkdsb3ZlcyI6IjQiLCJQYW50cyI6IjUiLCJUb3AiOiIxNiIsIkNhcGUiOiI1IiwiSGFpciI6IjQiLCJHbGFzc2VzIjoiMTAiLCJoYWlyVG9uZSI6ImY0ODliNiIsInBhbnRzVG9uZSI6ImVmMmYwMCIsInRvcFRvbmUiOiJlZjJmMDAiLCJzb2Nrc1RvbmUiOiJlZjJmMDAiLCJnbG92ZXNUb25lIjoiNDk2MmY5IiwiZ2xvdmVzVG9uZTIiOiI0OTYyZjkiLCJjYXBlVG9uZSI6IjQ5NjJmOSJ9/1/show.png"
              alt="Burger Queen"
              className="Mabry"
            />
            <img
              src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJIYWlyTG93ZXIiOiIyMCIsIkJvZHkiOiIxIiwiRXllcyI6IjQiLCJNb3V0aCI6IjQiLCJVbmRlcndlYXIiOiI0IiwiU2hvZXMiOiI1IiwiR2xvdmVzIjoiMyIsIlBhbnRzIjoiMiIsIkphY2tldCI6IjYiLCJOZWNrIjoiMSIsIkhhaXIiOiI2IiwiSGF0IjoiNCIsImV5ZXNUb25lIjoiYzY5NjFjIiwiZXllc1RvbmUyIjoiYWFjYWQxIiwibWFza1RvbmUiOiIyZTVhNDQiLCJ1bmRlcndlYXJUb25lIjoiMjI0MDA4IiwicGFudHNUb25lIjoiNDQ0NDQ0IiwidG9wVG9uZSI6IjI2ODc1NiIsIndpbmdzVG9uZSI6IjdmNDQ0NCIsIndpbmdzVG9uZTIiOiI4ZTM1MzUiLCJzaG9lc1RvbmUiOiJjNjk2MWMiLCJnbG92ZXNUb25lIjoiYzM4ZDQwIiwiaGF0VG9uZSI6IjM3NTM2ZSIsImhhdFRvbmUyIjoiYzM4ZDQwIiwiamFja2V0VG9uZSI6ImQyZDJkMiIsIm5lY2tUb25lIjoiYzM4ZDQwIn0=/1/show.png
              "
              alt="Soul"
              className="Jason"
            />
            <img
              src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjciLCJCb2R5IjoiMyIsIkV5ZXMiOiIxNyIsIk1vdXRoIjoiMTQiLCJTaG9lcyI6IjEiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiMTMiLCJOZWNrIjoiMyIsIkhhaXIiOiIzMSIsInNraW5Ub25lIjoiZjRkNWMxIiwiZXllc1RvbmUiOiI0ZDdjMWUiLCJoYWlyVG9uZSI6ImYwZWY5MyIsInRvcFRvbmUiOiJmZmViYWIiLCJzaG9lc1RvbmUiOiJlZGVkZWQiLCJjYXBlVG9uZSI6IjUxMTUxNSIsImNhcGVUb25lMiI6ImVjMjQyNCJ9/1/show.png

              "
              alt="Granola"
              className="Nola"
            />
            </div> */}
            <div className="character_container">
            {characters.map((character) => (
                <div key={character.id}>
                    <p className="player_title">{character.name}</p>
                    <p className="player_type">{character.type}</p>
                    <p className="player_morality">{character.morality}</p>
                    <img src={character.image} alt="player" className="player_image" />
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
            </div>
             </div></>
             
    )
}