import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                TODO List
            </div>
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
