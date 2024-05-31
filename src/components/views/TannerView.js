import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tanner from './Tanner.png';
import Ruins from './Ruins.mp4';
import ProfilePicture from './Tanner.png';
import Kitty from './kitty.png';
import Tol from './Kittyy.png';
import "./Tanner.css"
import Slide1 from './Piano.jpg';
import Slide2 from './Grad.png';
import Slide3 from './Hog.png';
import Goth from './Goth.png';
import Gif from './giphy.gif';
import Gif2 from './hellooo.gif';

export const TannerTalk = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [lastSlide, setLastSlide] = useState(0);
    const navigate = useNavigate()

    const slides = [Slide1, Slide2, Slide3];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

  

    return (
        <div>
            <div className="tanner_container">
                <video autoPlay loop muted className="ruin_home">
                    <source src={Ruins} type="video/mp4" />
                </video>
                <div className="centered_container" style={{ width: `${width}px`, height: `${height}px` }}>
                    <div className="profile_section">
                        <img src={ProfilePicture} alt="Profile" className="profile_picture" />
                        <div className="user_info">
                            <h1>Username:
                            Enbyriot
                            </h1>
                            <p> </p>
                        </div>
                    
                    </div>
                    <div className="kitty_container" >
                    <div className="hello_kitty">
                            <img src={Kitty} alt="Kitty" className="kitty_logo"/>
                        </div>
                        </div>
                        <div className="content_section about_me">
                <h2>About Me</h2>
            <div className="about_content">
                 <img src={Goth} alt="About Me" className="about_image" />
                 <ul className="about_comment">
            <li>Catholicism (I'm not religious)</li>
            <li>Cranking My Hog</li>
            <li>Hello Kitty</li>
            <li>Nursing</li>
            <li>RAHHHHH</li>
        </ul>
                </div>
                        <div className="hello_toilet">
                            <img src={Gif} alt="tol" className="tol_logo"/>
                        </div>
                        <div className="hello_skibidi">
                            <img src={Gif2} alt="tol" className="skib_logo"/>
                        </div>
                    </div>
                    <div className="content_section">
                        <h2>Construction</h2>
                        <p className="desc"></p>
                    </div>
                    <div className="slider_section">
                        <button onClick={prevSlide}>{"<"}</button>
                        <img src={slides[currentSlide]} alt="Slide" className="slide_image" />
                        <button onClick={nextSlide}>{">"}</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}