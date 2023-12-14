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
            <p className="pop_text">Hey mane, welcome to Lulu Le-I mean Brandtrun, what kind of place is Brandtrun? Idk man but I gotta eat so see you later</p>
            <button onClick={handleClosePopup} className="close_button">
              Continue
            </button>
            </div>
          </div>
        
      )}
    </>
    
    );
}