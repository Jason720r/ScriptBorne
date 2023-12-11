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
            <div>Welcome Challenger</div>
           <fieldset>
            <button type="button" className="entry_button" onClick={() => navigate('/main')}>
                Enter the Lands of FRANKLIN!
            </button>
           </fieldset>
            </div>
            </>
    )
}