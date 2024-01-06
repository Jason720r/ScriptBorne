import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
    <li className="navbar__item">
    <Link className="nav-link" to="/home">
    <i className="fas fa-edit"></i>
    <div className="home_nav">Home</div>
    <span></span>
</Link>
</li>
<li className="navbar__item">
    <Link className="nav-link" to="/main">
    <i className="fas fa-edit"></i>
    <div className="main_nav">Main</div>
    <span></span>
</Link>
</li>
<li className="navbar__item">
    <Link className="nav-link" to="/nola">
    <i className="fas fa-edit"></i>
    <div className="about_nav">Nola Battle</div>
    <span></span>
</Link>
</li>
<li className="navbar__item">
    <Link className="nav-link" to="/players">
    <i className="fas fa-edit"></i>
    <div className="player_nav">Characters</div>
    <span></span>
</Link>
</li>
<li className="navbar__item">
    <Link className="nav-link" to="/items">
    <i className="fas fa-edit"></i>
    <div className="about_nav">Weapons</div>
    <span></span>
</Link>
</li>
<li className="navbar__item">
    <Link className="nav-link" to="/about">
    <i className="fas fa-edit"></i>
    <div className="about_nav">About</div>
    <span></span>
</Link>
</li>
</ul>
    )
}