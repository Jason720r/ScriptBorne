import React, { useEffect, useState } from "react";
 
export const Franklin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  
    return (
      <>
      <div className="main_container">
        <div className="main_view" >Weapons</div>
        <img 
        src="images/scriptborne_shrine.png" 
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