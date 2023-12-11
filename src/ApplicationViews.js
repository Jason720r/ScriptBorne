import { Route, Routes } from "react-router-dom";
import { Franklin } from "./components/views/MainView.js";

export const ApplicationViews =() => {
    return <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Franklin />} />
        
        </Routes></>
}