import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light justify-content-end" style={{background: '#FFFFFF'}}>
            <Link className="navbar-brand" to='/'><img className="fluid-img" style={{width: 250 + 'px', height: 59 + 'px'}} src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531aff/5a16fe60b1b09d0001923efc_ITKlogo%20for%20Andrew-1-p-500.png" alt="In The Know Local Logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to='/'>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/issues'>Issues</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/about'>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;