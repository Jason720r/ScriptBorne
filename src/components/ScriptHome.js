import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Script.css";
import HomeVideo from './Home.mp4';


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
            <video autoPlay loop muted className="home_background">
            <source src={HomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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