import {NavLink}from "react-router-dom"
import "./Nav.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1>gym-ska</h1>
            <div className="nav-links">
                <NavLink className="link" to="/signup">signup</NavLink>
                <NavLink className="link" to="/login">login</NavLink>
                <NavLink className="link" to="/gyms">gyms</NavLink>
            </div>
        </div>
      )}
export default NavBar