import React, { useEffect, useState } from "react";
import "./Main.css"
 import JasonImage from './Popup.png';
 import ShrineImage from './Shrine.png';
 import NolaImage from './Nola.png';
 import Granola from './Granola.png';
 import BatBrahm from './BatBrahm.png'
 import ShrineVideo from './ShrineVideo.mp4';
 import BurgerQueen from './Burger.png';
 import { Navigate, useNavigate } from "react-router-dom";



export const Franklin = () => {
  const [jasonPopupOpen, setJasonPopupOpen] = useState(false);
  const [burgerQueenPopupOpen, setBurgerQueenPopupOpen] = useState(false);
  const [nolaPopupOpen, setNolaPopupOpen] = useState(false);
  const [actionPopupOpen, setActionPopupOpen] = useState(false);
  const [jasonInteraction, setJasonInteraction] = useState("start");
  const [burgerQueenInteraction, setBurgerQueenInteraction] = useState("start");
  const [nolaInteraction, setNolaInteraction] = useState("start");
  const [actionInteraction, setActionInteraction] = useState("start");
  const [interaction, setInteraction] = useState([]);
  const [currentNPC, setCurrentNPC] = useState(null);
  const [popupData, setPopupData] = useState({
    isOpen: false,
    npcName: null,
    interaction: null,
  })

  const navigate = useNavigate();

  const handleCloseJasonPopup = () => {
    setJasonPopupOpen(false);
  }

  const handleCloseBurgerQueenPopup = () => {
    setBurgerQueenPopupOpen(false);
  }

  const handleCloseNolaPopup = () => {
    setNolaPopupOpen(false);
  }

  const handleCloseActionPopup = () => {
    setActionPopupOpen(false);
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
  
  const handleActionInteraction = () => {
    setActionPopupOpen(true);
    setActionInteraction("start")
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

  const handleActionOption = () => {
    handleCloseActionPopup();
  }
  

const handleBrahmCity = () => {
  navigate('/stage');
}

const handleNolaBattle = () => {
  navigate('/nola');
}

  
    return (
      <>
        <div className="main_container">


          <video autoPlay loop muted className="script_shrine">
            <source src={ShrineVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <img
            src="http://www.avatarsinpixels.com/minipix/eyJDYXBlQmFjayI6IjIiLCJFeWVzIjoiMjYiLCJNb3V0aCI6IjQiLCJTaG9lcyI6IjEiLCJQYW50cyI6IjIiLCJUb3AiOiIxMyIsIkJlbHQiOiIxIiwiSGFpciI6IjE2Iiwic2tpblRvbmUiOiJmM2IwODQiLCJoYWlyVG9uZSI6Ijc4MzkzYiIsInRvcFRvbmUiOiIwMDAwMDAiLCJzaG9lc1RvbmUiOiJlZWVlZWUiLCJjYXBlVG9uZSI6IjFlMTU1MSJ9/1/show.png"
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
            src="http://www.avatarsinpixels.com/minipix/eyJIYWlyTG93ZXIiOiIxNiIsIkNhcGVCYWNrIjoiNCIsIkJvZHkiOiIxIiwiRXllcyI6IjEiLCJNb3V0aCI6IjQiLCJTaG9lcyI6IjEiLCJQYW50cyI6IjEiLCJUb3AiOiI3IiwiSmFja2V0IjoiNyIsIkhhaXIiOiI0Iiwic2tpblRvbmUiOiJlYmMxYTMiLCJleWVzVG9uZSI6IjI2MTUxMiIsImhhaXJUb25lIjoiMjYxNTEyIiwicGFudHNUb25lIjoiMjYxNTEyIiwidG9wVG9uZSI6IjI2MTUxMiIsInNob2VzVG9uZSI6Ijg5MjEyMSIsImNhcGVUb25lIjoiNTgwZTBlIiwiamFja2V0VG9uZSI6IjZkMWIxYiJ9/1/show.png"
            alt="Tanner"
            className="npc_five"
            onClick={() => handleInteractionNola("Nola Granola")}
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
          Brahm
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
              <p className="pop_text">Wanna go somehwere wacky?</p>
  
              <div className="dialogue_options">
                {jasonInteraction === "start" && (
                  <>
                <button onClick={handleBrahmCity} className="dialogue_button">Brahm City</button>
                <button onClick={handleOption1} className="dialogue_button">Nah I'm good.</button>
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
                <button onClick={handleNolaBattle} className="dialogue_button">*Attack</button>
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
      </>
    );
}