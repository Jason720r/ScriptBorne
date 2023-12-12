import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews.js"
import { NavBar } from "./components/NavBar.js"



export const ScriptBorne = () => {
    return <Routes>

        <Route path="*" element={
                <>
                <NavBar />
                <ApplicationViews />
                </>
           
        } />
    </Routes>
}