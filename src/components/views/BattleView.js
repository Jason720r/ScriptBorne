import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const BattleTime = () => {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [playerDamage, setPlayerDamage] = useState(10); // Example damage value
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);

    const handleAttack = () => {
        if (isPlayerTurn) {
            setEnemyHealth(enemyHealth - playerDamage);
            setIsPlayerTurn(false)
        }
    };

    const handleDefend = () => {

        setIsPlayerTurn(false)
    }

    return (
        <div>
            <h2>Battle Time</h2>
            <div className="battlefield">
                <img src="/path/to/player-image.png" alt="Player" />
                <img src="/path/to/enemy-image.png" alt="Enemy" />
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