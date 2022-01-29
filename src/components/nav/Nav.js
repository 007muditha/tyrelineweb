import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return(
        <nav className='topNav'>
            <h3 className='navLogo'>Logo</h3>
            <ul className='navLinksContainer'>
            <li className='navLinkHolder'><NavLink to="" >Home</NavLink></li>
            <li  className='navLinkHolder'><NavLink to="about">About</NavLink></li>
            </ul>
        </nav>

    )
}

export default Nav