import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to='/'></Link>
            <div class="absolute text-white bottom-0 right-0 space-x-8 p-9 text-lg">
                <NavLink to='/'>Join Us</NavLink>
                <NavLink to='/mission'>Our Mission</NavLink>
                <NavLink to='/team'>Our Team</NavLink>
            </div>
        </nav>
    );
}