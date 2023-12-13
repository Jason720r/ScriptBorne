import React, { useEffect, useState } from "react";
 
export const Franklin = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 5000); 
  }, []);

  
    return (
        <>
          <div className="main_container">
            <div className="main_view">Weapons</div>
        
          </div>
          {/* Render the pop-up if isPopupOpen is true */}
      {isPopupOpen && (
        <div className="popup_container">
          <div className="popup_content">
            {/* Image */}
            <img
              src="URL_TO_YOUR_IMAGE"
              alt="Popup Image"
              className="popup_image"
            />
            {/* Text */}
            <p>Popup Text Goes Here</p>
          </div>
        </div>
      )}
        </>
    );
}