import React, { useEffect, useState } from "react";
import "./Main.css"
 import JasonImage from './Popup.png';
 import ShrineImage from './Shrine.png';
 import BatBrahm from './BatBrahm.png'
 import ShrineVideo from './ShrineVideo.mp4';
 import BurgerQueen from './Burger.png';


export const Franklin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [interaction, setInteraction] = useState([]);
  const [currentNPC, setCurrentNPC] = useState(null);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setInteraction(null);
  }

  const handleInteraction = () => {
    setIsPopupOpen(true);
    setInteraction(true);
  }

  const handleOption1 = () => {
    // Update the content in the popup based on Option 1
    // You can change the text or image as needed
    handleClosePopup();

  };
  
  const handleOption2 = () => {
    // Update the content in the popup based on Option 2
    // You can change the text or image as needed
    handleClosePopup();

  };
  

  
    return (
      <>
        <div className="main_container">


          {/* ... (your NPC images) */}
          <video autoPlay loop muted className="script_shrine">
            <source src={ShrineVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <img
            src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjciLCJCb2R5IjoiMyIsIkV5ZXMiOiIxNyIsIk1vdXRoIjoiMTQiLCJTaG9lcyI6IjEiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiMTMiLCJOZWNrIjoiMyIsIkhhaXIiOiIzMSIsInNraW5Ub25lIjoiZjRkNWMxIiwiZXllc1RvbmUiOiI0ZDdjMWUiLCJoYWlyVG9uZSI6ImYwZWY5MyIsInRvcFRvbmUiOiJmZmViYWIiLCJzaG9lc1RvbmUiOiJlZGVkZWQiLCJjYXBlVG9uZSI6IjUxMTUxNSIsImNhcGVUb25lMiI6ImVjMjQyNCJ9/1/show.png"
            alt="Nola Granola"
            className="npc_one"
            onClick={() => handleInteraction("Nola Granola")}
          />
          {/* <img 
            src={BatBrahm}
            alt="BatBrahm"
            className="npc_two"
            onClick={() => handleInteraction("BatBrahm")}
          /> */}
          <img
            src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJCb2R5IjoiMSIsIkV5ZXMiOiIyOCIsIlNvY2tzIjoiMSIsIkdsb3ZlcyI6IjQiLCJQYW50cyI6IjUiLCJUb3AiOiIxNiIsIkNhcGUiOiI1IiwiSGFpciI6IjQiLCJHbGFzc2VzIjoiMTAiLCJoYWlyVG9uZSI6ImY0ODliNiIsInBhbnRzVG9uZSI6ImVmMmYwMCIsInRvcFRvbmUiOiJlZjJmMDAiLCJzb2Nrc1RvbmUiOiJlZjJmMDAiLCJnbG92ZXNUb25lIjoiNDk2MmY5IiwiZ2xvdmVzVG9uZTIiOiI0OTYyZjkiLCJjYXBlVG9uZSI6IjQ5NjJmOSJ9/1/show.png"
            alt="Burger Queen"
            className="npc_three"
            onClick={() => handleInteraction("Burger Queen")}
          />
          {/* "Interact" button for Burger Queen */}
          <button onClick={handleInteraction} className="interact_button">
            Interact
          </button>
        </div>
  
        {isPopupOpen && (
          <div className="popup_container">
            <div className="popup_content">
              <img
                src={BurgerQueen}
                alt="Popup Image"
                className="popup_image"
              />
              <p className="pop_text">Everybody wish a Happy Birthday to the Burger Queen! Happy 21 Crime Fighter!</p>
  
              <div className="dialogue_options">
                {interaction === "start" && (
                  <>
                <button onClick={handleOption1} className="dialogue_button">Ok, Thanks!</button>
                <button onClick={handleOption2} className="dialogue_button">FUck you.</button>
                </>
                )}

                {interaction == "option1" && (
                  <p>Option 1 selected</p>
                )}
                 {interaction == "option2" && (
                  <p>Option 2 selected</p>
                )}
              </div>

              {interaction !== "option1" && interaction !== "option2" && (
                <button onClick={handleClosePopup} className="close_button">
                  Happy Birthday :D
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
}