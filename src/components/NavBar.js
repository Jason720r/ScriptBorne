import { Link, useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
        <li className="navbar__item active">
            <Link className="navbar__link" to="/tickets">???</Link>
        </li>
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
</ul>
    )
}