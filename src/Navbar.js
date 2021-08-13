import React from 'react';
import {NavLink} from 'react-router-dom'
import './App.css'; 

export default function Navbar() {
    return (
        <div>
            <NavLink 
                activeClassName="selected"
                className="not-selected"
                to="/"
                exact
                >HOME</NavLink>
            <NavLink 
                to="/about"
                activeClassName="selected"
                className="not-selected"
                exact
                >ABOUT
            </NavLink>
        </div>
    )
}