import React,  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './navbar.styles.scss'

const Navbar = () => {
    const [navToggled, setNavToggled] = useState(false)

    // // Effect to animate mobile nav. 
    // useEffect(()=> {
    //     const burger = document.querySelector('.navbar__burger');
    //     const nav = document.querySelector('.navbar__link-list');
    //     burger.addEventListener('click', ()=> {
    //         nav.classList.toggle('nav-active');
    //         burger.classList.toggle('nav-active');

    //     });
    // })

    const handleClick = () => {
        console.log('clicked!')
        setNavToggled(!navToggled)
    }

    return (
        <nav className="navbar">
            <div className="navbar__item">
                <Link className="navbar__logo--link" to='/'>
                    <img className="navbar__logo" src="https://parablar.sirv.com/ITKL/logo/ITKL_Logo.jpg?w=250&h=119" alt="In The Know Local Logo"/>
                </Link>
            </div>
            <ul className={navToggled ? "navbar__link-list nav-active" : "navbar__link-list" }>
                <li className="navbar__link"><NavLink className="navbar__link" to='/'>Home</NavLink></li>
                <li className="navbar__link"><NavLink className="navbar__link" to='/issues'>Issues</NavLink></li>
                <li className="navbar__link"><NavLink className="navbar__link" to='/about'>About</NavLink></li>
                <li className="navbar__link"><NavLink className="navbar__link" to='/contact'>Contact</NavLink></li>
            </ul>
            <div onClick={handleClick} className={navToggled ? "navbar__burger nav-active" : "navbar__burger" }>
                <div className="navbar__burger navbar__burger--line1"></div>
                <div className="navbar__burger navbar__burger--line2"></div>
                <div className="navbar__burger navbar__burger--line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;