import {NavLink}from "react-router-dom"
import "./Nav.css"

function NavBar({updateUser}) {

 const  handleLogOut=()=>{
    fetch(`/logout`,{
        method:`DELETE`
    })
    .then(res=>{
        if(res.ok){
        updateUser(false)
        }
    })

    }
    return (
        <div className="navbar">
            <h1 className='head' >gym-ska</h1>
            <div className="nav-links">
                <button onClick={handleLogOut}>Log out </button>
                <NavLink className="link" to="/signup">signup</NavLink>
                <NavLink className="link" to="/login">login</NavLink>
                <NavLink className="link" to="/gyms">gyms</NavLink>
                <NavLink className="link" to='/users/:id'>home</NavLink>
            </div>
        </div>
      )}
export default NavBar