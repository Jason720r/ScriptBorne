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
            <p>      </p>
            <div class="subtitle">Welcome Challenger</div>
            <p>         </p>
                    <iframe
                src="https://giphy.com/embed/vNzpGA4yvdxejLefpz"
                width="480"
                height="480"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title="Giphy GIF"
            ></iframe>
            <p>
                
                <a href="https://giphy.com/gifs/pixel-fire-vNzpGA4yvdxejLefpz">
        
                </a>
            </p>
           <fieldset>
            <button type="button" class="btn primary" onClick={() => navigate('/main')}>
                Enter the Lands of Brandtrun!
            </button>
           </fieldset>

            </div>
            
            </>
    )
}