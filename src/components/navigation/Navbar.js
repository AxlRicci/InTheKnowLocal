import React,  { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    useEffect(()=> {
        const burger = document.querySelector('.navbar__burger');
        const nav = document.querySelector('.navbar__link-list');
        burger.addEventListener('click', ()=> {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('nav-active');

        });
    })

    return (
        <nav className="navbar">
            <div className="navbar__item">
                <Link className="navbar__logo--link" to='/'>
                    <img className="navbar__logo" style={{width: 250 + 'px', height: 59 + 'px'}} src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531aff/5a16fe60b1b09d0001923efc_ITKlogo%20for%20Andrew-1-p-500.png" alt="In The Know Local Logo"/>
                </Link>
            </div>
            <ul className="navbar__link-list">
                <li className="navbar__link"><NavLink className="navbar__link" to='/'>Home</NavLink></li>
                <li className="navbar__link"><NavLink className="navbar__link" to='/issues'>Issues</NavLink></li>
                <li className="navbar__link"><NavLink className="navbar__link" to='/about'>About</NavLink></li>
                <li className="navbar__link"><NavLink className="navbar__link" to='/contact'>Contact</NavLink></li>
            </ul>
            <div className="navbar__burger" on>
                <div className="navbar__burger navbar__burger--line1"></div>
                <div className="navbar__burger navbar__burger--line2"></div>
                <div className="navbar__burger navbar__burger--line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;