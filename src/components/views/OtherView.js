import React, { useEffect, useState } from "react";
import Brahm from './Charlemagne.png';
import BatBrahm from './BatBrahm.png';
import BrahmRoad from '../BrahmRoad.mp4';
import "./Other.css";
import Dark from './Dark.webp';
import Face from './Face.webp';
import { useNavigate } from "react-router-dom";


export const Stage = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isButtonInvisible, setIsButtonInvisible] = useState(false);

    const navigate = useNavigate()


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsButtonVisible(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, [])
    
    useEffect(() => {
        const timerInvisible = setTimeout(() => {
            setIsButtonInvisible(true);
        }, 3000);

        return () => clearTimeout(timerInvisible);
    }, []);

    const handleBrahmArrival = () => {
        navigate('/city');
    }



    return (
        <>
            <div className="other_container">
            <video autoPlay loop muted className="script_shrine">
                <source src={BrahmRoad} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 

        <img 
        src={Dark}
        alt="Brahmbil"
        className="vehicle_one"
        >   
        </img>

          <img
            src={BatBrahm}
            alt="Brahm"
            className="npc_face"
          />
            {isButtonVisible && (
                    <button onClick={handleBrahmArrival} className="interact_arrival">
                        ENTER BRAHM CITY
                    </button>
                )}
                {isButtonInvisible ? null : (
                    <button onClick={handleBrahmArrival} className="second_button">
                        LOADING.....
                    </button>
                )}
        </div>

        </>
        
    )
}

