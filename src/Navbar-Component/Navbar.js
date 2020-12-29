import React from 'react';
import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <p>City Tour</p>
            </div>
            <div className="navbar-link">
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;