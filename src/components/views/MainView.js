import React, { useEffect, useState } from "react";
import "./Main.css"
 import JasonImage from './Popup.png';
 import ShrineImage from './Shrine.png';
 import BatBrahm from './BatBrahm.png'


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
          <img
            src={ShrineImage}
            alt="shrine"
            className="script_shrine"
          />
          <img 
            src={BatBrahm}
            alt="BatBrahm"
            className="npc_two"
            onClick={() => handleInteraction("BatBrahm")}
          />
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
                src={JasonImage}
                alt="Popup Image"
                className="popup_image"
              />
              <p className="pop_text">Hello there traveler, welcome to the camp, feel free to introduce yourself to the others before beginning your harrowing journey!</p>
  
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
                  Continue
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
}