import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                .
            </div>
            <div className="nav-title">
                TODO List
            </div>
            <div>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to ="/NewTodo">Add new TODO</Link></li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
