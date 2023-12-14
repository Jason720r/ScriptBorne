import React, { useEffect, useState } from "react";
import "./Main.css"
 import JasonImage from './Popup.png';


export const Franklin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
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
        src="https://img.freepik.com/free-vector/pixel-art-vacation-background_52683-86708.jpg?w=1800&t=st=1702575594~exp=1702576194~hmac=4337c2a9f107a7bc40a832284190d5bbe6fe61e012c261e00ce063b31a50685f" 
        alt="shrine"
        className="script_shrine">
          
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