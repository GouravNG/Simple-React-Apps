import { HomePage } from "./Pages/homepage"
import { RandomCountry } from "./Pages/Randomcountry"
import { NotFound } from "./Pages/404"
import { AboutMe } from "./Pages/About"
import "./contry.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
export const Country = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/random" element={<RandomCountry />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                </Routes>
            </Router>
        </>
    )
}