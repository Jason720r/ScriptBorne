import React, { useEffect, useState } from "react";
import "./Weapon.css"

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
          <div className="weapon_view">Weapons</div>
            <div className="individual_container">
            {weapons.map((weapon) => (
              <div key={weapon.id}>
                <p className="weapon_title">{weapon.name}</p>
                <p className="weapon_damage">Damage:{weapon.damage}</p>
                <p className="weapon_image">{weapon.image}</p>

              </div>
            ))}
            </div>
          </div>
        </>
      );
      
}

