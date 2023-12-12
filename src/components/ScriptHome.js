import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"



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
            <p>--------</p>
            <div>Welcome Challenger</div>
            <p>--------</p>
           <fieldset>
            <button type="button" className="entry_button" onClick={() => navigate('/main')}>
                Enter the Lands of Brandtrun!
            </button>
           </fieldset>
            </div>
            <div class="container">
            <label class="title">Default</label>
            <p>Kick! Punch! It's all in the mind.</p>
            </div>
            <div class="container dark">
            <label class="title">dark</label>
            <p>You see, the island is the site of a secret nuclear
            weapons disposal facility.</p>
            </div>
            <div class="container light">
            <label class="title">light</label>
            <p>Crash, Crash? Are you there Crash? ... Are you there Crash?</p>
            </div>
            
            </>
    )
}