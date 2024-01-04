import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NolaBattle from './NolaBattle.mp4';
import FireAttack from './FireAttack.gif';
import BrahmBeam from './BrahmBeam.gif';
import ChiChi from './Chi.png';
import Nola from './Nola.png'
import './Nola.css'

export const BattleNola = () => {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [nolaHealth, setNolaHealth] = useState(100);
    const [playerDamage, setPlayerDamage] = useState(10);
    const [nolaDamage, setNolaDamage] = useState(50)
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [isNolaTurn, setIsNolaTurn] = useState(true)
    const [healthUses, setHealthUses] = useState(0);
    const [showFireball, setShowFireBall] = useState(false);
    const [showChiChi, setShowChiChi] = useState(false);
    const [showPopup, setShowPopup] = useState(false)

    const navigate = useNavigate()

    const handlePlayerAttack = () => {
        if (isPlayerTurn) {
            setShowFireBall(true);
            setTimeout(() => {
                setNolaHealth(nolaHealth - playerDamage);
                setShowFireBall(false);
                setIsPlayerTurn(false)
            }, 500)
        }
    }

    const handleNolaAttack = () => {
        if (isNolaTurn) {
            setShowChiChi(true);
            setTimeout(() => {
                setPlayerHealth(prevHealth => prevHealth - nolaDamage);
                setShowChiChi(false);
            }, 1000)
        }
    }

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
            handleNolaAttack();
            setIsPlayerTurn(true);
        }
    }, [isPlayerTurn, playerHealth, nolaDamage])

    useEffect(() => {
        setShowPopup(true);
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleEscape = () => {
        navigate('/main');
    }
    return (
        <div>
            <div className="nola_container">
                <video autoPlay loop muted className="nola_background">
                    <source src={NolaBattle} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        
            <div className="nolafield">
            {showPopup && (
                    <div className="nola_container">
                    <div className="nola_entry">
                        <img
                        src={Nola}
                        alt="Nola"
                        className="nola_popup"
                        onClick={handleClosePopup}
                        />
                        <p className="pop_text">What made you think attacking me was a good idea?</p>
                        </div>
                        </div>
                )}
                <img
                src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjciLCJCb2R5IjoiMyIsIkV5ZXMiOiIxNyIsIk1vdXRoIjoiMTQiLCJTaG9lcyI6IjEiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiMTMiLCJOZWNrIjoiMyIsIkhhaXIiOiIzMSIsInNraW5Ub25lIjoiZjRkNWMxIiwiZXllc1RvbmUiOiI0ZDdjMWUiLCJoYWlyVG9uZSI6ImYwZWY5MyIsInRvcFRvbmUiOiJmZmViYWIiLCJzaG9lc1RvbmUiOiJlZGVkZWQiLCJjYXBlVG9uZSI6IjUxMTUxNSIsImNhcGVUb25lMiI6ImVjMjQyNCJ9/1/show.png" alt="Nola"
                className="battle_nola"/>
                <img
                src={ChiChi}
                className="battle_chi"/>
                <div className="health-bar player-health">
                <div className="health-fill" style={{ width: `${playerHealth}%` }}></div>
                </div>
                <div className="health-bar nola-health">
                <div className="health-fill" style={{ width: `${nolaHealth}%` }}></div>
                {showFireball && <img src={FireAttack} alt="Fireball" className="fireball-animation"/>} 
                {showChiChi && <img src={BrahmBeam} alt="Laser" className="laser_animation"/>}
</div>
            </div>
            {/* <div className="actions">
                <button className="combat_button" onClick={handlePlayerAttack}>Attack</button>
                <button className="combat_button"  onClick={handleDefend}>Defend</button>
                <button className="combat_button" onClick={handleHealth} disabled={healthUses >= 3}>Restore Health</button>
                <button className="combat_button" onClick={handleEscape}>Run</button>
            </div> */}
        </div>
        </div>
    )
    }