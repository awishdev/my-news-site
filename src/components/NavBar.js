//nav bar to allow users to select the page
import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {

    return(
        <>
            <NavLink
                to="/"
                className="nav-link"
           >
                Home
            </NavLink>
            <NavLink
                to="/authors"
                className="nav-link"    
            >
                Authors
            </NavLink>
            <NavLink
                to="/newarticle"
                className="nav-link"
            >
                New Article
            </NavLink>
        </>
    )
}
export default NavBar;