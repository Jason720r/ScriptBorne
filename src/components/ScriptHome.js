import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Script.css"


export const Home = () => {

    const [ boss, setBoss ] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8088/bosses")
            .then((response) => response.json())
            .then((BossArray) => {
                setBoss(BossArray);
            })
    }, []);

    return (
        <>
        <div className="home_container">
            <p></p>
            <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/268px-Playstation_logo_colour.svg.png"
        alt="PlayStation Logo"
        className="top_right_image"
    />
            <p></p>
            <div className="fire_gif">
            </div>
            <div className="home_title">ScriptBorne</div>
           <fieldset className="entry_field">
            
            <button type="button" className="entry_button" onClick={() => navigate('/main')}>
                Enter the Lands of Brandtrun
            </button>
           </fieldset>
            </div>
            
            </>
    )
}