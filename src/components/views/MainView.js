import React, { useEffect, useState } from "react";
import "./Main.css"
 import JasonImage from './Popup.png';
 import ShrineImage from './Shrine.png';
 import BatBrahm from './BatBrahm.png'


export const Franklin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [interaction, setInteraction] = useState([]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  const handleInteraction = () => {
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
            onClick={() => handleInteraction("Burger Queen")}
          />
          <img
            src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJCb2R5IjoiMSIsIkV5ZXMiOiIyOCIsIlNvY2tzIjoiMSIsIkdsb3ZlcyI6IjQiLCJQYW50cyI6IjUiLCJUb3AiOiIxNiIsIkNhcGUiOiI1IiwiSGFpciI6IjQiLCJHbGFzc2VzIjoiMTAiLCJoYWlyVG9uZSI6ImY0ODliNiIsInBhbnRzVG9uZSI6ImVmMmYwMCIsInRvcFRvbmUiOiJlZjJmMDAiLCJzb2Nrc1RvbmUiOiJlZjJmMDAiLCJnbG92ZXNUb25lIjoiNDk2MmY5IiwiZ2xvdmVzVG9uZTIiOiI0OTYyZjkiLCJjYXBlVG9uZSI6IjQ5NjJmOSJ9/1/show.png"
            alt="Burger Queen"
            className="npc_three"
          />
          {/* "Interact" button for Burger Queen */}
          <button onClick={handleInteraction} className="interact_button">
            Interact
          </button>
        </div>
  
        {/* Render the pop-up if isPopupOpen is true */}
        {isPopupOpen && (
          <div className="popup_container">
            <div className="popup_content">
              {/* Image */}
              <img
                src={JasonImage}
                alt="Popup Image"
                className="popup_image"
              />
              {/* Text */}
              <p className="pop_text">Hello there traveler, welcome to the camp, feel free to introduce yourself to the others before beginning your harrowing journey!</p>
  
              <div className="dialogue_options">
                <button onClick={handleOption1} className="dialogue_button">Ok, Thanks!</button>
                <button onClick={handleOption2} className="dialogue_button">FUck you.</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}