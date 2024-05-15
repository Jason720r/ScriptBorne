import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tanner from './Tanner.png';
import Ruins from './Ruins.mp4';

export const TannerTalk = () => {
    const [showPopup, setShowPopup] = useState(false)

    const navigate = useNavigate()

    return (
        <div>
            <div className="tanner_container">
                <video autoPlay loop muted className="ruin_home">
                <source src={Ruins} type="video/mp4" />
                </video>

            </div>
        </div>
    )
}