import React,  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './navbar.styles.scss'

// The navbar
// Mobile nav is toggled by adding and removing the --active modifier to the nav element.
// Hamburger button is animated by adding and removing the nav-active class to the button.

const Navbar = () => {
    const [navToggled, setNavToggled] = useState(false)

    const toggleNav = () => {
        setNavToggled(!navToggled)
    }

    const closeNav = () => {
        setNavToggled(false)
    }


    return (
        <section className="navbar">
            <div className="navbar__content">
                <Link className="navbar__logo-link" to='/'>
                    <img className="navbar__logo" src="https://parablar.sirv.com/ITKL/logo/ITKL_Logo.jpg?w=250&h=119" alt="In The Know Local Logo"/>
                </Link>
                <nav id="navigation" className={`navbar__menu ${navToggled ? 'navbar__menu--active' : ''}`} aria-labelledby="menubutton">
                    <ul className="navbar__nav-list" role="menubar">
                        <li className="navbar__item" role="none">
                            <NavLink onClick={closeNav} className="navbar__link" to='/' role="menuitem" >Home</NavLink>
                        </li>
                        <li className="navbar__item" role="none">
                            <NavLink onClick={closeNav} className="navbar__link" to='/issues' role="menuitem">Issues</NavLink>
                        </li>
                        <li className="navbar__item" role="none">
                            <NavLink onClick={closeNav} className="navbar__link" to='/about' role="menuitem">About</NavLink>
                        </li>
                        <li className="navbar__item" role="none">
                            <NavLink onClick={closeNav} className="navbar__link" to='/contact' role="menuitem">Contact</NavLink>
                        </li>
                    </ul> 
                </nav>
                <button id="menubutton" onClick={toggleNav} className={`navbar__burger ${navToggled ? 'nav-active' : ''}`} aria-label="menubutton" aria-haspopup="true" aria-expanded={navToggled} aria-controls="navigation">
                    <div className="navbar__burger-line navbar__burger-line--1"></div>
                    <div className="navbar__burger-line navbar__burger-line--2"></div>
                    <div className="navbar__burger-line navbar__burger-line--3"></div>
                </button>
            </div>
        </section>
    )
}

export default Navbar;