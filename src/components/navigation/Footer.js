import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container py-2">
                <div className="row justify-content-center">
                    <div className="col-md-6 order-md-2 d-flex flex-column align-items-center px-5 py-2">
                        <div>
                            <h4 className='text-light text-center'>More information</h4>
                        </div>
                        <div>
                            <p className="text-light text-center">This is a place for more information about In The Know Local to go.</p>
                        </div>
                    </div>
                    <div className="col-md-2 order-md-1">
                            <div className='list-group'>
                            <ul className="text-center list-group list-group-flush">
                                <Link to='/' className="list-group-item text-light bg-dark">Home</Link>
                                <Link to='/issues' className="list-group-item text-light bg-dark">Issues</Link>
                                <Link to='/about' className="list-group-item text-light bg-dark">About</Link>
                                <Link to='/contact' className="list-group-item text-light bg-dark">Contact</Link>
                            </ul>
                        </div>
                    </div>
                    <div className='py-2 text-dark d-xs-none'>
                        <p>-</p>
                    </div>
                    <div className="col-md-2 order-md-3">
                        <div className='list-group'>
                            <ul className='text-center list-group list-group-flush'>
                                <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">Twitter</a>
                                <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">Facebook</a>
                                <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">LinkedIn</a>
                                <a href="https://instagram.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">Instagram</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container bg-dark text-align-center pb-2">
            <p className='text-light font-weight-light text-center'>Copyright 2020 In The Know Local</p>
        </div>
        </div>
    )
}

export default Footer