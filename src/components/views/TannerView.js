import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tanner from './Tanner.png';
import Ruins from './Ruins.mp4';
import ProfilePicture from './pfp.png';
import "./Tanner.css"

export const TannerTalk = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(700);

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
                            <h1>Username</h1>
                            <p>Status: Feeling nostalgic!</p>
                        </div>
                    </div>
                    <div className="content_section">
                        <h2>About Me</h2>
                        <p>This is where you can put some information about yourself. Just like the good old MySpace days!</p>
                    </div>
                    <div className="content_section">
                        <h2>Interests</h2>
                        <p>List your interests here. Music, movies, hobbies, etc.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}