import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tanner from './Tanner.png';
import Ruins from './Ruins.mp4';
import "./Tanner.css"

export const TannerTalk = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(300);

    const navigate = useNavigate()

    return (
        <div>
            <div className="tanner_container">
                <video autoPlay loop muted className="ruin_home">
                <source src={Ruins} type="video/mp4" />
                </video>
                <div className="centered_container" style={{ width: `${width}px`, height: `${height}px` }}>
                    <p>Content goes here</p>
                </div>
            </div>
            <div className="controls">
                <label>
                    Width:
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                    />
                </label>
                <label>
                    Height:
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>

            </div>
        </div>
    )
}