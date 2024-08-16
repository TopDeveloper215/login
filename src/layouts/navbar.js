import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/button.css"

function Navbar() {
    return(
        <div className="App-header">
            <NavLink
                className="button_style"
                to="/login"
            >
                <p className="button_text">Login</p>
                
            </NavLink>
            <NavLink
                className="button_style"
                to="/register"
            >
                <p className="button_text">Register</p>
                
            </NavLink>
        </div>
    )
}
export default Navbar;