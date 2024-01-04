import React, { useEffect, useState } from "react";
import "./Weapon.css"
import QuietRush from './QuietRush.png';
import Toilet from './Toilet.png';
import Katana from './Katana.png';
import GreatSword from './GreatSword.png'

export const WeaponInfo = () => {
    const [weapons, setWeapon] = useState([]);




    useEffect(() => {
        fetch("http://localhost:8088/weapons")
            .then((response) => response.json())
            .then((WeaponArray) => {
               setWeapon(WeaponArray); 
            })
    }, []);

    return (
        <>
          <div className="weapon_container">
          <img
            src={QuietRush}
            alt="Quiet_Rush"
            className="quiet"
          />
           <img
            src={Toilet}
            alt="Yhorm"
            className="toilet"
          />
          <img
            src={Katana}
            alt="moon"
            className="katana"
          />
          <img
            src={GreatSword}
            alt="moon"
            className="sword"
          />
          <div className="weapon_view">Weapons</div>
            <div className="individual_container">
            {weapons.map((weapon) => (
              <div key={weapon.id}>
                <p className="weapon_title">{weapon.name}</p>
                <p className="weapon_damage">Damage:{weapon.damage}</p>

              </div>
              
            ))}
            </div>
          </div>
        </>
      );
      
}

