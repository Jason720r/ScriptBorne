import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import City from './Extra.mp4';

export const BrahmCity = () => {
    const [battlePopupOpen, setBattlePopupOpen] = useState(false);


    return (
        <>
        <div className="city_container">
        <video autoPlay loop muted className="script_city">
            <source src={City} type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>
        </>
    )
}