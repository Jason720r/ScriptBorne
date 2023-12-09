import { Route, Routes } from "react-router-dom";

export const ApplicationViews =() => {
    return <>
    <Routes>
        <Route path="/home" element={<Home />} />
        
        </Routes></>
}