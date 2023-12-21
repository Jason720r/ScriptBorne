import React, { useEffect, useState } from "react";
import "./Main.css"
 import JasonImage from './Popup.png';
 import ShrineImage from './Shrine.png';
 import NolaImage from './Nola.png';
 import Granola from './Granola.png';
 import BatBrahm from './BatBrahm.png'
 import ShrineVideo from './ShrineVideo.mp4';
 import BurgerQueen from './Burger.png';
 import Brahm from './Charlemagne.png';



export const Franklin = () => {
  const [jasonPopupOpen, setJasonPopupOpen] = useState(false);
  const [burgerQueenPopupOpen, setBurgerQueenPopupOpen] = useState(false);
  const [nolaPopupOpen, setNolaPopupOpen] = useState(false);
  const [jasonInteraction, setJasonInteraction] = useState("start");
  const [burgerQueenInteraction, setBurgerQueenInteraction] = useState("start");
  const [nolaInteraction, setNolaInteraction] = useState("start");
  const [brahmPopupOpen, setBrahmPopupOpen] = useState(false)
  const [brahmInteraction, setBrahmInteraction] = useState(false)
  const [interaction, setInteraction] = useState([]);
  const [currentNPC, setCurrentNPC] = useState(null);
  const [popupData, setPopupData] = useState({
    isOpen: false,
    npcName: null,
    interaction: null,
  })

  const handleCloseJasonPopup = () => {
    setJasonPopupOpen(false);
  }

  const handleCloseBurgerQueenPopup = () => {
    setBurgerQueenPopupOpen(false);
  }

  const handleCloseNolaPopup = () => {
    setNolaPopupOpen(false);
  }

  const handleCloseBrahmPopup = () => {
    setBrahmPopupOpen(false);
}

  const handleInteractionJason = () => {
    setJasonPopupOpen(true);
    setJasonInteraction("start");
  }

  const handleInteractionBurgerQueen = () => {
    setBurgerQueenPopupOpen(true);
    setBurgerQueenInteraction("start")
  }

  const handleInteractionNola = () => {
    setNolaPopupOpen(true);
    setNolaInteraction("start")
  }
  
  const handleInteractionBrahm = () => {
    setBrahmPopupOpen(true);
    setBrahmInteraction("start")
  }

  const handleOption1 = () => {
    handleCloseJasonPopup();

  };
  
  const handleOption2 = () => {

    handleCloseBurgerQueenPopup();

  };

  const handleOption3 = () => {

    handleCloseNolaPopup();

  };
  
  const handleOptionBrahm = () => {
    handleCloseBrahmPopup();
};

  
    return (
      <>
        <div className="main_container">


          <video autoPlay loop muted className="script_shrine">
            <source src={ShrineVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <img
            src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjciLCJCb2R5IjoiMyIsIkV5ZXMiOiIxNyIsIk1vdXRoIjoiMTQiLCJTaG9lcyI6IjEiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiMTMiLCJOZWNrIjoiMyIsIkhhaXIiOiIzMSIsInNraW5Ub25lIjoiZjRkNWMxIiwiZXllc1RvbmUiOiI0ZDdjMWUiLCJoYWlyVG9uZSI6ImYwZWY5MyIsInRvcFRvbmUiOiJmZmViYWIiLCJzaG9lc1RvbmUiOiJlZGVkZWQiLCJjYXBlVG9uZSI6IjUxMTUxNSIsImNhcGVUb25lMiI6ImVjMjQyNCJ9/1/show.png"
            alt="Nola Granola"
            className="npc_one"
            onClick={() => handleInteractionNola("Nola Granola")}
          />
          <img
            src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJIYWlyTG93ZXIiOiIyMCIsIkJvZHkiOiIxIiwiRXllcyI6IjQiLCJNb3V0aCI6IjQiLCJVbmRlcndlYXIiOiI0IiwiU2hvZXMiOiI1IiwiR2xvdmVzIjoiMyIsIlBhbnRzIjoiMiIsIkphY2tldCI6IjYiLCJOZWNrIjoiMSIsIkhhaXIiOiI2IiwiSGF0IjoiNCIsImV5ZXNUb25lIjoiYzY5NjFjIiwiZXllc1RvbmUyIjoiYWFjYWQxIiwibWFza1RvbmUiOiIyZTVhNDQiLCJ1bmRlcndlYXJUb25lIjoiMjI0MDA4IiwicGFudHNUb25lIjoiNDQ0NDQ0IiwidG9wVG9uZSI6IjI2ODc1NiIsIndpbmdzVG9uZSI6IjdmNDQ0NCIsIndpbmdzVG9uZTIiOiI4ZTM1MzUiLCJzaG9lc1RvbmUiOiJjNjk2MWMiLCJnbG92ZXNUb25lIjoiYzM4ZDQwIiwiaGF0VG9uZSI6IjM3NTM2ZSIsImhhdFRvbmUyIjoiYzM4ZDQwIiwiamFja2V0VG9uZSI6ImQyZDJkMiIsIm5lY2tUb25lIjoiYzM4ZDQwIn0=/1/show.png"
            alt="Jason"
            className="npc_two"
            onClick={() => handleInteractionJason("Jason")}
          />
          <img
            src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJCb2R5IjoiMSIsIkV5ZXMiOiIyOCIsIlNvY2tzIjoiMSIsIkdsb3ZlcyI6IjQiLCJQYW50cyI6IjUiLCJUb3AiOiIxNiIsIkNhcGUiOiI1IiwiSGFpciI6IjQiLCJHbGFzc2VzIjoiMTAiLCJoYWlyVG9uZSI6ImY0ODliNiIsInBhbnRzVG9uZSI6ImVmMmYwMCIsInRvcFRvbmUiOiJlZjJmMDAiLCJzb2Nrc1RvbmUiOiJlZjJmMDAiLCJnbG92ZXNUb25lIjoiNDk2MmY5IiwiZ2xvdmVzVG9uZTIiOiI0OTYyZjkiLCJjYXBlVG9uZSI6IjQ5NjJmOSJ9/1/show.png"
            alt="Burger Queen"
            className="npc_three"
            onClick={() => handleInteractionBurgerQueen("Burger Queen")}
          />

<img
            src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJCb2R5IjoiMiIsIk1vdXRoIjoiMTMiLCJTaG9lcyI6IjUiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiNyIsIkphY2tldCI6IjMiLCJDYXBlIjoiNSIsIkhhaXIiOiIxOSIsInNraW5Ub25lIjoiZjJjZGI2IiwiZXllc1RvbmUiOiI3MDI2MzIiLCJtYXNrVG9uZSI6IjE5Mzc3ZCIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiI0NDQ0NDQiLCJ3aW5nc1RvbmUiOiI0ODViYmYiLCJ3aW5nc1RvbmUyIjoiMTkzNzdkIiwic2hvZXNUb25lIjoiMTcyYzVlIiwiY2FwZVRvbmUiOiIxNTI0NDYiLCJqYWNrZXRUb25lIjoiNzAyNjMyIiwiamFja2V0VG9uZTIiOiJlZWVlZWUifQ==/1/show.png"
            alt="Brahm"
            className="npc_four"
            onClick={() => handleInteractionBrahm("Brahm")}
          />
          <button onClick={handleInteractionJason} className="interact_jason">
            Jason
          </button>

          <button
          onClick={handleInteractionBurgerQueen}
          className="interact_button"
        >
          Burger Queen
        </button>

        <button onClick={ handleInteractionNola} className="interact_nola">
          Nola Granola
        </button>

        <button onClick={ handleInteractionBrahm} className="interact_brahm">
          Charlemagne of Thad Castle
        </button>
        </div>
  
        {jasonPopupOpen && (
          <div className="popup_container">
            <div className="popup_content">
              <img
                src={JasonImage}
                alt="Popup Image"
                className="popup_image"
              />
              <p className="pop_text">Greetings!</p>
  
              <div className="dialogue_options">
                {jasonInteraction === "start" && (
                  <>
                <button onClick={handleOption1} className="dialogue_button">Ok, Thanks!</button>
                <button onClick={handleOption1} className="dialogue_button">Sure maneee.</button>
                </>
                )}
                </div>
              </div>
            </div>
                )}

        {nolaPopupOpen && (
          <div className="popup_container">
            <div className="popup_content">
              <img
                src={Granola}
                alt="Popup Image"
                className="popup_image"
              />
              <p className="pop_text">Sup</p>
  
              <div className="dialogue_options">
                {nolaInteraction === "start" && (
                  <>
                <button onClick={handleOption3} className="dialogue_button">Uh Hi?</button>
                <button onClick={handleOption3} className="dialogue_button">Leave</button>
                </>
                )}
                </div>
              </div>
            </div>
                )}

                  
        {burgerQueenPopupOpen && (
          <div className="popup_container">
            <div className="popup_content">
              <img
                src={BurgerQueen}
                alt="Popup Image"
                className="popup_image"
              />
              <p className="pop_text">*Stares menacingly</p>
  
              <div className="dialogue_options">
                {burgerQueenInteraction === "start" && (
                  <>
                <button onClick={handleOption2} className="dialogue_button">Uhhhh Hi?</button>
                <button onClick={handleOption2} className="dialogue_button">Leave</button>
                </>
                )}
                
              </div>
            </div>
          </div>
        )}
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
    );
}