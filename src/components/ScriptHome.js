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
           
           <fieldset>
            <button type="button" class="btn primary" onClick={() => navigate('/main')}>
                Enter the Lands of Brandtrun!
            </button>
           </fieldset>

            </div>
            
            </>
    )
}