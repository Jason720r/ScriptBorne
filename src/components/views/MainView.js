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
    setInteraction(false);
  }

  
    return (
      <>
      <div className="main_container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/268px-Playstation_logo_colour.svg.png"
        alt="PlayStation Logo"
        className="top_right_image"
    />
        <img 
        src={ShrineImage} 
        alt="shrine"
        className="script_shrine"
        >
          
        </img>

        <img 
        src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjciLCJCb2R5IjoiMyIsIkV5ZXMiOiIxNyIsIk1vdXRoIjoiMTQiLCJTaG9lcyI6IjEiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiMTMiLCJOZWNrIjoiMyIsIkhhaXIiOiIzMSIsInNraW5Ub25lIjoiZjRkNWMxIiwiZXllc1RvbmUiOiI0ZDdjMWUiLCJoYWlyVG9uZSI6ImYwZWY5MyIsInRvcFRvbmUiOiJmZmViYWIiLCJzaG9lc1RvbmUiOiJlZGVkZWQiLCJjYXBlVG9uZSI6IjUxMTUxNSIsImNhcGVUb25lMiI6ImVjMjQyNCJ9/1/show.png"
        alt="Granola"
        className="npc_one"
        />
        <img 
        src={BatBrahm}
        alt="BatBrahm"
        className="npc_two"
        >
          </img>
        <img
        src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJCb2R5IjoiMSIsIkV5ZXMiOiIyOCIsIlNvY2tzIjoiMSIsIkdsb3ZlcyI6IjQiLCJQYW50cyI6IjUiLCJUb3AiOiIxNiIsIkNhcGUiOiI1IiwiSGFpciI6IjQiLCJHbGFzc2VzIjoiMTAiLCJoYWlyVG9uZSI6ImY0ODliNiIsInBhbnRzVG9uZSI6ImVmMmYwMCIsInRvcFRvbmUiOiJlZjJmMDAiLCJzb2Nrc1RvbmUiOiJlZjJmMDAiLCJnbG92ZXNUb25lIjoiNDk2MmY5IiwiZ2xvdmVzVG9uZTIiOiI0OTYyZjkiLCJjYXBlVG9uZSI6IjQ5NjJmOSJ9/1/show.png"
        alt="Burger Queen"
        className="npc_three"
        >
        </img>
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
            <button onClick={handleClosePopup} className="close_button">
              Continue
            </button>
            </div>
          </div>
        
      )}
    </>
    
    );
}