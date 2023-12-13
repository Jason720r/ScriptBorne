import React, { useEffect, useState } from "react";
import "./Main.css"
 
export const Franklin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  
    return (
      <>
      <div className="main_container">
        <img 
        src="https://i.pinimg.com/originals/20/0a/0a/200a0aec714b5d76123e05d367f9ec9e.jpg" 
        alt="shrine"
        className="script_shrine">
          
        </img>
      </div>
      {/* Render the pop-up if isPopupOpen is true */}
      {isPopupOpen && (
        <div className="popup_container">
          <div className="popup_content">
            <button onClick={handleClosePopup} className="close_button">
              Continue
            </button>
            {/* Image */}
            <img
              src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJFeWVzIjoiMjYiLCJNb3V0aCI6IjQiLCJTaG9lcyI6IjEiLCJQYW50cyI6IjIiLCJUb3AiOiIxMyIsIkJlbHQiOiIxIiwiSGFpciI6IjE2Iiwic2tpblRvbmUiOiJmM2IwODQiLCJoYWlyVG9uZSI6Ijc4MzkzYiIsInRvcFRvbmUiOiIwMDAwMDAiLCJzaG9lc1RvbmUiOiJlZWVlZWUiLCJjYXBlVG9uZSI6IjFlMTU1MSJ9/1/show.png"
              alt="Popup Image"
              className="popup_image"
            />
            {/* Text */}
            <p>Hey mane, welcome to Lulu Le-I mean Brandtrun, what kind of place is Brandtrun? Idk man but I gotta eat so see you later</p>
          </div>
        </div>
      )}
    </>
    
    );
}