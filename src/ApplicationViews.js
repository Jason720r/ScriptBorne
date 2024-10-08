import { Route, Routes } from "react-router-dom";
import { Franklin } from "./components/views/MainView.js";
import { CharacterInfo } from "./components/views/CharacterView.js";
import { AboutUs } from "./components/About.js";
import { Home } from "./components/ScriptHome.js";
import { WeaponInfo } from "./components/views/WeaponView.js";
import { Stage } from "./components/views/OtherView.js";
import { BrahmCity } from "./components/views/BrahmCity.js";
import { BattleTime } from "./components/views/BattleView.js";
import { BattleNola } from "./components/views/NolaBattle.js";
import { FunkyTalk } from "./components/views/FunkyView.js";


export const ApplicationViews =() => {
    return <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Franklin />} />
        <Route path="/players" element={<CharacterInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/items" element={<WeaponInfo />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/city" element={<BrahmCity />} />
        <Route path="/brass" element={<BattleTime />} />
        <Route path="/nola" element={<BattleNola />} />
        <Route path="/funky" element={<FunkyTalk/>} />
        
        </Routes></>
    
}