import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        if (isEnemyTurn) {
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

    const handleEscape = () => {
        navigate('/main');
    }
    
    }