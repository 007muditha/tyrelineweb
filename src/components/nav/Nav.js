import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return(
        <div>
            <div className='topLogoContainer'>
                <div className='topImageContainer'>
                <img className='topImageLogo' src='https://tyrelineaustralia.com.au/wp-content/uploads/2021/06/TyreLine-Logo.svg'/>
                </div>
            </div>
        <nav className='topNav'>
            <ul className='navLinksContainer'>
            <li className='navLinkHolder'><NavLink to="" >Home</NavLink></li>
            <li  className='navLinkHolder'><NavLink to="about">About</NavLink></li>
            <li  className='navLinkHolder'><NavLink to="about">About</NavLink></li>
            <li  className='navLinkHolder'><NavLink to="about">About</NavLink></li>
            <li  className='navLinkHolder'><NavLink to="about">About</NavLink></li>
            <li  className='navLinkHolder'><NavLink to="about">About</NavLink></li>
            </ul>
        </nav>
        </div>

    )
}

export default Nav