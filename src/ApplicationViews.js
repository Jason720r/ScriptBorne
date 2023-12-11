import { Route, Routes } from "react-router-dom";
import { Franklin } from "./components/views/MainView.js";
import { CharacterInfo } from "./components/views/CharacterView.js";

export const ApplicationViews =() => {
    return <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Franklin />} />
        <Route path="/players" element={<CharacterInfo />} />
        
        </Routes></>
}