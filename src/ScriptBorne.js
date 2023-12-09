import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const ScriptBorne = () => {
    return <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="*" element={
            <Authorized>
                <>
                <NavBar />
                <ApplicationViews />
                </>
            </Authorized>
        } />
    </Routes>
}