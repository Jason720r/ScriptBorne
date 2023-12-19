import React, { useEffect, useState } from "react";
import "./About.css";


export const AboutUs = () => {
    return (
        <>
        <div className="about_container">
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/268px-Playstation_logo_colour.svg.png"
        alt="PlayStation Logo"
        className="top_right_image"
    />
          <div className="about_text">
            <div className="about_title">About us</div>
           <p className="about_info">Thank you for taking the time to play/view this ratchet side project made by I, the Jason.
           This was my first attempt at making a 'game' application in JavaScript, using plenty of stolen gifs and CSS styling from the internet. Very original indeed...

           </p>

           <p className="about_two">           
            Regardless, the main point of this project was to further hone my skills as a developer and to learn how to implement new functionalities such as pop-ups!
           I originally planned on creating the 'game' aspect in Scratch, a very beginner friendly and fun way to produce games, programs or anything you could possibly think of(except the cure to Depression, I already tried :D )
           </p>
            </div>
            <img 
            src="http://www.avatarsinpixels.com/minipix/eyJXaW5ncyI6IjMiLCJIYWlyTG93ZXIiOiIyMCIsIkJvZHkiOiIxIiwiRXllcyI6IjQiLCJNb3V0aCI6IjQiLCJVbmRlcndlYXIiOiI0IiwiU2hvZXMiOiI1IiwiR2xvdmVzIjoiMyIsIlBhbnRzIjoiMiIsIkphY2tldCI6IjYiLCJOZWNrIjoiMSIsIkhhaXIiOiI2IiwiSGF0IjoiNCIsImV5ZXNUb25lIjoiYzY5NjFjIiwiZXllc1RvbmUyIjoiYWFjYWQxIiwibWFza1RvbmUiOiIyZTVhNDQiLCJ1bmRlcndlYXJUb25lIjoiMjI0MDA4IiwicGFudHNUb25lIjoiNDQ0NDQ0IiwidG9wVG9uZSI6IjI2ODc1NiIsIndpbmdzVG9uZSI6IjdmNDQ0NCIsIndpbmdzVG9uZTIiOiI4ZTM1MzUiLCJzaG9lc1RvbmUiOiJjNjk2MWMiLCJnbG92ZXNUb25lIjoiYzM4ZDQwIiwiaGF0VG9uZSI6IjM3NTM2ZSIsImhhdFRvbmUyIjoiYzM4ZDQwIiwiamFja2V0VG9uZSI6ImQyZDJkMiIsIm5lY2tUb25lIjoiYzM4ZDQwIn0=/1/show.png"
            alt="JasonAsian"
            className="about_image"
          />
            </div>
            </>
    )
}