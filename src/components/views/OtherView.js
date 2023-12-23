import React, { useEffect, useState } from "react";
import Brahm from './Charlemagne.png';
import BatBrahm from './BatBrahm.png';
import BrahmRoad from '../BrahmRoad.mp4';
import "./Other.css";
import Dark from './Dark.webp';
import Face from './Face.webp';


export const Stage = () => {
    const [brahmPopupOpen, setBrahmPopupOpen] = useState(false)
    const [brahmInteraction, setBrahmInteraction] = useState(false)
    




    const handleCloseBrahmPopup = () => {
        setBrahmPopupOpen(false);
    }

    const handleOptionBrahm = () => {
        handleCloseBrahmPopup();
    };

    const handleInteractionBrahm = () => {
        setBrahmPopupOpen(true);
        setBrahmInteraction("start")
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
            onClick={() => handleInteractionBrahm("Brahm")}
          />
        <button onClick={ handleInteractionBrahm} className="interact_brahm">
          Charlemagne of Thad Castle
        </button>
        </div>
        {brahmPopupOpen && (
          <div className="popup_container">
            <div className="popup_content">
              <img
                src={Brahm}
                alt="Popup Image"
                className="popup_image"
              />
              <p className="pop_text">What's up PUSSY, nice cock~</p>
  
              <div className="dialogue_options">
                {brahmInteraction === "start" && (
                  <>
                <button onClick={handleOptionBrahm} className="dialogue_button">[THREATEN]*heaving cow noise</button>
                <button onClick={handleOptionBrahm} className="dialogue_button">[INTIMIDATE]*whip cock out</button>
                <button onClick={handleOptionBrahm} className="dialogue_button">What is wrong with you?</button>
                </>
                )}
                </div>
              </div>
            </div>
                )}
        </>
        
    )
}

