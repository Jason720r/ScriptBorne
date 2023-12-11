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
            <div>Welcome</div>
            <div className="boss_container">
                <h1>ARE YOU WILLING TO CHALLENGE THE BOSSES?????</h1>
                <div className="boss_preview">
                    <img src="https://static.tvtropes.org/pmwiki/pub/images/1527763051_preview_default_giant_dad.png" alt="Solaire" />
                </div>
            </div>
            </div>
            </>
    )
}