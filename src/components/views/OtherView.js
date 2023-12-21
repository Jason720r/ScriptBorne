import React, { useEffect, useState } from "react";
import Brahm from './Charlemagne.png';
import BatBrahm from './BatBrahm.png';
import BrahmRoad from '../BrahmRoad.mp4';
import "./Other.css";
import Bat from './Bat.png';


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
        src={Bat}
        alt="Brahmbil"
        className="vehicle_one"
        >   
        </img>

          <img
            src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJCb2R5IjoiMiIsIk1vdXRoIjoiMTMiLCJTaG9lcyI6IjUiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiNyIsIkphY2tldCI6IjMiLCJDYXBlIjoiNSIsIkhhaXIiOiIxOSIsInNraW5Ub25lIjoiZjJjZGI2IiwiZXllc1RvbmUiOiI3MDI2MzIiLCJtYXNrVG9uZSI6IjE5Mzc3ZCIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiI0NDQ0NDQiLCJ3aW5nc1RvbmUiOiI0ODViYmYiLCJ3aW5nc1RvbmUyIjoiMTkzNzdkIiwic2hvZXNUb25lIjoiMTcyYzVlIiwiY2FwZVRvbmUiOiIxNTI0NDYiLCJqYWNrZXRUb25lIjoiNzAyNjMyIiwiamFja2V0VG9uZTIiOiJlZWVlZWUifQ==/1/show.png"
            alt="Brahm"
            className="npc_four"
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

