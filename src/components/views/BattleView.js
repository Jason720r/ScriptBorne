import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Battle.css'

export const BattleTime = () => {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [playerDamage, setPlayerDamage] = useState(10);
    const [enemyDamage, setEnemyDamage] = useState(30)
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [isEnemyTurn, setIsEnemyTurn] = useState(true)

    const handleAttack = () => {
        if (isPlayerTurn) {
            setEnemyHealth(enemyHealth - playerDamage);
            setIsPlayerTurn(false)
        }
    };

    const handleEnemyAttack = () => {
        if (isEnemyTurn) {
            setPlayerHealth(playerHealth = enemyDamage);
            setIsEnemyTurn(false)
        }
    }

    const handleDefend = () => {

        setIsPlayerTurn(false)
    }

    useEffect(() => {
        if(!isPlayerTurn) {
            handleEnemyAttack();
            setIsPlayerTurn(true);
        }
    }, [isPlayerTurn, playerHealth, enemyDamage]);

    

    return (
        <div>
            <h2>Battle Time</h2>
            <div className="battlefield">
                <img src="http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiIyMCIsIkV5ZXMiOiI1IiwiUGFudHMiOiIyIiwiSmFja2V0IjoiMyIsIkhhaXIiOiIyMCIsIkhhdCI6IjUiLCJza2luVG9uZSI6ImFhYmNlMCIsInBhbnRzVG9uZSI6IjA5MTgyMSIsImhhdFRvbmUiOiJkODJlMmUifQ==/1/show.png" alt="Player" />
                <img src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJCb2R5IjoiMiIsIk1vdXRoIjoiMTMiLCJTaG9lcyI6IjUiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiNyIsIkphY2tldCI6IjMiLCJDYXBlIjoiNSIsIkhhaXIiOiIxOSIsInNraW5Ub25lIjoiZjJjZGI2IiwiZXllc1RvbmUiOiI3MDI2MzIiLCJtYXNrVG9uZSI6IjE5Mzc3ZCIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiI0NDQ0NDQiLCJ3aW5nc1RvbmUiOiI0ODViYmYiLCJ3aW5nc1RvbmUyIjoiMTkzNzdkIiwic2hvZXNUb25lIjoiMTcyYzVlIiwiY2FwZVRvbmUiOiIxNTI0NDYiLCJqYWNrZXRUb25lIjoiNzAyNjMyIiwiamFja2V0VG9uZTIiOiJlZWVlZWUifQ==/1/show.png" alt="Enemy" />
                <div>Player Health: {playerHealth}</div>
                <div>Enemy Health: {enemyHealth}</div>
            </div>
            <div className="actions">
                <button onClick={handleAttack}>Attack</button>
                <button onClick={handleDefend}>Defend</button>
            </div>
        </div>
    );
}