import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tanner from './Tanner.png';
import Toji from './RetroMove.mp4';
import Name from './Sashimi.gif';
import ProfilePicture from './Satou.png';
import Kitty from './chainsaw.png';
import Tol from './Kittyy.png';
import "./Tanner.css"
import Slide1 from './Goatjo.jpg';
import Slide2 from './War.png';
import Slide3 from './Collab.jpg';
import Slide4 from './Geto.png';
import Goth from './real.png';
import Gif from './Gojo.gif';
import Gif2 from './hellooo.gif';

export const TannerTalk = () => {
    const [jasonPopupOpen, setJasonPopupOpen] = useState(false);
    const [jasonInteraction, setJasonInteraction] = useState("start");
    const [showPopup, setShowPopup] = useState(false)
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [lastSlide, setLastSlide] = useState(0);
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [playerDamage, setPlayerDamage] = useState(10);
    const [enemyDamage, setEnemyDamage] = useState(10);
    const [randomChance, setChance] = useState(false);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [isEnemyTurn, setIsEnemyTurn] = useState(true)
    const [healthUses, setHealthUses] = useState(0);
    const [showAttack, setShowAttack] = useState(false);

    const navigate = useNavigate()
    

    const slides = [Slide1, Slide2, Slide3, Slide4];

    const handleAttack = () => {
        if (isPlayerTurn) {
            setShowAttack(true);
            setTimeout(() => {

                setEnemyHealth(enemyHealth - playerDamage);
                setShowAttack(false);
                setIsPlayerTurn(false)
            }, 500)
            
        }
    }

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleInteractionJason = () => {
        setJasonPopupOpen(true);
        setJasonInteraction("start");
      }


    return (
        <div>
            
            <div className="tanner_container">
                <video autoPlay loop muted className="ruin_home">
                    <source src={Toji} type="video/mp4" />
                </video>
                <div className="centered_container" style={{ width: `${width}px`, height: `${height}px` }}>
                    <div className="profile_section">
                        <img src={ProfilePicture} alt="Profile" className="profile_picture" />
                        <div className="user_info">
                    <img src={Name} alt="Username" className="username_gif" />
                        </div>
                    </div>
                    <hr className="separator" />
                    <div className="doodle"> doodles </div>
                    <hr className="separator_two" />
                        <div className="slider_section">
                <button onClick={prevSlide}>{"<"}</button>
                <img src={slides[currentSlide]} alt="Slide" className="slide_image" />
                <button onClick={nextSlide}>{">"}</button>
                <div className="vertical_line"></div>
                <div className="spotify_container">
                    <iframe
                        src="https://open.spotify.com/embed/track/5hVghJ4KaYES3BFUATCYn0?utm_source=generator"
                        width="380"
                        height="180"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                        title="Spotify Player"
                    ></iframe>
                </div>
                
            </div>
            <div className="content_section about_me">
                <div className="about_content">
                    <div className="about_wrapper">
                        <ul className="about_comment">
                            <li>It's a work in progress, that's it.</li>
                            <div className="npc_two_container">
                <img
            src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJIYWlyTG93ZXIiOiIyMCIsIkJvZHkiOiIxIiwiRXllcyI6IjQiLCJNb3V0aCI6IjQiLCJVbmRlcndlYXIiOiI0IiwiU2hvZXMiOiI1IiwiR2xvdmVzIjoiMyIsIlBhbnRzIjoiMiIsIkphY2tldCI6IjYiLCJOZWNrIjoiMSIsIkhhaXIiOiI2IiwiSGF0IjoiNCIsImV5ZXNUb25lIjoiYzY5NjFjIiwiZXllc1RvbmUyIjoiYWFjYWQxIiwibWFza1RvbmUiOiIyZTVhNDQiLCJ1bmRlcndlYXJUb25lIjoiMjI0MDA4IiwicGFudHNUb25lIjoiNDQ0NDQ0IiwidG9wVG9uZSI6IjI2ODc1NiIsIndpbmdzVG9uZSI6IjdmNDQ0NCIsIndpbmdzVG9uZTIiOiI4ZTM1MzUiLCJzaG9lc1RvbmUiOiJjNjk2MWMiLCJnbG92ZXNUb25lIjoiYzM4ZDQwIiwiaGF0VG9uZSI6IjM3NTM2ZSIsImhhdFRvbmUyIjoiYzM4ZDQwIiwiamFja2V0VG9uZSI6ImQyZDJkMiIsIm5lY2tUb25lIjoiYzM4ZDQwIn0=/1/show.png"
            alt="Jason"
            className="npc_two"
            onClick={() => handleInteractionJason("Jason")}
          />
          <div className="npc_bubble">
                        <p>BLEGHGHGHEHGEH!</p>
                    </div>
            </div>
                        </ul>
                        <div className="hello_toilet">
                            <img src={Gif} alt="tol" className="tol_logo" />
                        </div>
                    </div>
                    <img src={Goth} alt="About Me" className="about_image" />
                </div>
            </div>
            {/* <div className="hello_skibidi">
                <img src={Gif2} alt="tol" className="skib_logo" />
            </div> */}
                            <img src={Kitty} alt="Kitty" className="kitty_logo"/>
        </div>
    </div>

        </div>
    );
}