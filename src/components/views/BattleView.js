import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Battle.css'
import CyberPunk from './CyberPunk.mp4';
import FireAttack from './FireAttack.gif'

export const BattleTime = () => {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [playerDamage, setPlayerDamage] = useState(10);
    const [enemyDamage, setEnemyDamage] = useState(30)
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [isEnemyTurn, setIsEnemyTurn] = useState(true)
    const [healthUses, setHealthUses] = useState(0);
    const [showFireball, setShowFireBall] = useState(false);

    const navigate = useNavigate()

    const handleAttack = () => {
        if (isPlayerTurn) {
            setShowFireBall(true);
            setTimeout(() => {
                setEnemyHealth(enemyHealth - playerDamage);
                setShowFireBall(false);
                setIsPlayerTurn(false)
            }, 500)
        }
    };

    const handleEnemyAttack = () => {
        setPlayerHealth(prevHealth => prevHealth - enemyDamage);
    };
    
    const handleHealth = () => {
        if (healthUses < 3) {
            setPlayerHealth(prevHealth => prevHealth + 10);
            setHealthUses(prevUses => prevUses + 1);
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

    const handleEscape = () => {
        navigate('/main');
    }

    return (
        <div>
            <div className="combat_container">
                <video autoPlay loop muted className="combat_background">
                    <source src={CyberPunk} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            <div className="battlefield">
                <img
                 src="http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiIyMCIsIkV5ZXMiOiI1IiwiUGFudHMiOiIyIiwiSmFja2V0IjoiMyIsIkhhaXIiOiIyMCIsIkhhdCI6IjUiLCJza2luVG9uZSI6ImFhYmNlMCIsInBhbnRzVG9uZSI6IjA5MTgyMSIsImhhdFRvbmUiOiJkODJlMmUifQ==/1/show.png" alt="Player" 
                 className="battle_player"/>
                <img 
                src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJCb2R5IjoiMiIsIk1vdXRoIjoiMTMiLCJTaG9lcyI6IjUiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiNyIsIkphY2tldCI6IjMiLCJDYXBlIjoiNSIsIkhhaXIiOiIxOSIsInNraW5Ub25lIjoiZjJjZGI2IiwiZXllc1RvbmUiOiI3MDI2MzIiLCJtYXNrVG9uZSI6IjE5Mzc3ZCIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiI0NDQ0NDQiLCJ3aW5nc1RvbmUiOiI0ODViYmYiLCJ3aW5nc1RvbmUyIjoiMTkzNzdkIiwic2hvZXNUb25lIjoiMTcyYzVlIiwiY2FwZVRvbmUiOiIxNTI0NDYiLCJqYWNrZXRUb25lIjoiNzAyNjMyIiwiamFja2V0VG9uZTIiOiJlZWVlZWUifQ==/1/show.png" alt="Enemy" 
                className="brahm_enemy"/>
                <div className="health-bar player-health">
                <div className="health-fill" style={{ width: `${playerHealth}%` }}></div>
                </div>
                <div className="health-bar enemy-health">
                <div className="health-fill" style={{ width: `${enemyHealth}%` }}></div>
                {showFireball && <img src={FireAttack} alt="Fireball" className="fireball-animation"/>} 
</div>
            </div>
            <div className="actions">
                <button className="combat_button" onClick={handleAttack}>Attack</button>
                <button className="combat_button"  onClick={handleDefend}>Defend</button>
                <button className="combat_button" onClick={handleHealth} disabled={healthUses >= 3}>Restore Health</button>
                <button className="combat_button" onClick={handleEscape}>Run</button>
            </div>
        </div>
        </div>
    );
}