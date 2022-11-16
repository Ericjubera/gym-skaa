import {NavLink}from "react-router-dom"
import { useState } from 'react'
import "./Nav.css"

function NavBar({updateUser}) {
    const [menu, setMenu] = useState(false)

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
        <nav>
        <div className="navbar">
            <h1 className='head' >gym-ska</h1>
          
            <div className="nav-links">
                
                
                <button className="buttons" onClick={handleLogOut}>Log out </button>



                {!menu?
            <button className="buttons" onClick={() => setMenu(!menu)}>
           more
          </button>:
          <ul>
            <button className="buttons" onClick={() => setMenu(!menu)}>go back</button>
                <NavLink className="link" to="/signup">signup</NavLink>
                  <NavLink className="link" to="/login">login</NavLink>
                 <NavLink className="link" to="/gyms">gyms</NavLink>
                  <NavLink className="link" to='/users/:id'>home</NavLink>
                </ul>}
             </div>
                

        </div>
        </nav>
      )}
export default NavBar