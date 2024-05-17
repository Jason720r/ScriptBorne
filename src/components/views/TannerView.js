import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tanner from './Tanner.png';
import Ruins from './Ruins.mp4';
import ProfilePicture from './pfp.png';
import Kitty from './kitty.png';
import Tol from './toooooilet.png';
import "./Tanner.css"

export const TannerTalk = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate()

  

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
                            <p> Work in Progress!</p>
                        </div>
                    
                    </div>
                    <div className="kitty_container" >
                    <div className="hello_kitty">
                            <img src={Kitty} alt="Kitty" className="kitty_logo"/>
                        </div>
                        </div>
                    <div className="content_section">
                        <h2>About Me</h2>
                        <p>Imagine you had your own fake MySpace Tumblr page Tanner, imagine.....
                            I'M STILL WORKING ON IT OKAY
                        </p>
                        <div className="hello_toilet">
                            <img src={Tol} alt="tol" className="tol_logo"/>
                        </div>
                    </div>
                    <div className="content_section">
                        <h2>Interests</h2>
                        <p className="desc">DAMN LOOK AT THIS TOILET
                        
                        DO NOT CLICK IT</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}