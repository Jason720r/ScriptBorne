import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import City from './Extra.mp4';
import BatBrahm from './BatBrahm.png';
import './Brahm.css';

export const BrahmCity = () => {
    const [battlePopupOpen, setBattlePopupOpen] = useState(false);
    const [brahmPopupOpen, setBrahmPopupOpen] = useState(false)
    const [brahmInteraction, setBrahmInteraction] = useState(false)

    const navigate = useNavigate()

    const handleCloseBrahmPopup = () => {
        setBrahmPopupOpen(false);
    };

    const handleOptionBrahm = () => {
        handleCloseBrahmPopup();
    };

    const handleInteractionBrahm = () => {
        setBrahmPopupOpen(true);
        setBrahmInteraction("start")
    }


    return (
        <>
        <div className="city_container">
        <video autoPlay loop muted className="script_city">
            <source src={City} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <img
            src='http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJCb2R5IjoiMiIsIk1vdXRoIjoiMTMiLCJTaG9lcyI6IjUiLCJHbG92ZXMiOiIxIiwiUGFudHMiOiIxIiwiVG9wIjoiNyIsIkphY2tldCI6IjMiLCJDYXBlIjoiNSIsIkhhaXIiOiIxOSIsInNraW5Ub25lIjoiZjJjZGI2IiwiZXllc1RvbmUiOiI3MDI2MzIiLCJtYXNrVG9uZSI6IjE5Mzc3ZCIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiI0NDQ0NDQiLCJ3aW5nc1RvbmUiOiI0ODViYmYiLCJ3aW5nc1RvbmUyIjoiMTkzNzdkIiwic2hvZXNUb25lIjoiMTcyYzVlIiwiY2FwZVRvbmUiOiIxNTI0NDYiLCJqYWNrZXRUb25lIjoiNzAyNjMyIiwiamFja2V0VG9uZTIiOiJlZWVlZWUifQ==/1/show.png'
            alt="Charlemagne"
            className="enemy_one"
            onClick={() => handleInteractionBrahm("Brahm")}
            />

            <button onClick={handleInteractionBrahm} className="interact_enemy">
                Charlemagne
            </button>

        </div>
        </>
    )
}