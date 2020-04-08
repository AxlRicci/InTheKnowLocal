import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="holder">
                <div className="footer">
                    <div className="footer__about">
                        <h3 className="footer__about-title">About</h3>
                        <p className="footer__about-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, fugiat deleniti numquam 
                            nihil velit odit aperiam consequatur possimus nesciunt quo corrupti accusantium neque modi alias enim quam at blanditiis 
                            unde iste dignissimos repellat commodi nisi. Recusandae consequuntur exercitationem itaque temporibus explicabo doloremque 
                            at ipsum, ea reprehenderit! In, delectus numquam beatae corporis quibusdam autem totam velit commodi veritatis nesciunt tempora 
                            soluta cumque corrupti, error minima culpa nisi vel excepturi aliquam a. Quis ducimus iste repellat, nulla architecto illo 
                            repellendus eum quaerat?
                        </p>
                    </div>
                    <div className="footer__categories">
                        <h3 className="footer__categories-title">Categories</h3>
                        <ul className="footer__categories-list">
                            <li className="footer__categories-item footer__categories-item--item1">
                                <Link to='#' className="footer__categories-item-link footer__categories-item-link--link1">Category 1</Link>
                            </li>
                            <li className="footer__categories-item footer__categories-item--item2">
                                <Link to='#' className="footer__categories-item-link footer__categories-item-link--link2">Category 2</Link>
                            </li>
                            <li className="footer__categories-item footer__categories-item--item3">
                                <Link to='#' className="footer__categories-item-link footer__categories-item-link--link3">Category 3</Link>
                            </li>
                            <li className="footer__categories-item footer__categories-item--item4">
                                <Link to='#' className="footer__categories-item-link footer__categories-item-link--link4">Category 4</Link>
                            </li>
                            <li className="footer__categories-item footer__categories-item--item5">
                                <Link to='#' className="footer__categories-item-link footer__categories-item-link--link5">Category 5</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__quick-links">
                        <h3 className="footer__quick-links-title">Quick Links</h3>
                        <ul className="footer__quick-links-list">
                            <li className="footer__quick-links-item footer__quick-links-item--item1">
                                <Link to='#' className="footer__quick-links-item-link footer__quick-links-item-link--link1">Link 1</Link>
                            </li>
                            <li className="footer__quick-links-item footer__quick-links-item--item2">
                                <Link to='#' className="footer__quick-links-item-link footer__quick-links-item-link--link2">Link 2</Link>
                            </li>
                            <li className="footer__quick-links-item footer__quick-links-item--item3">
                                <Link to='#' className="footer__quick-links-item-link footer__quick-links-item-link--link3">Link 3</Link>
                            </li>
                            <li className="footer__quick-links-item footer__quick-links-item--item4">
                                <Link to='#' className="footer__quick-links-item-link footer__quick-links-item-link--link4">Link 4</Link>
                            </li>
                            <li className="footer__quick-links-item footer__quick-links-item--item5">
                                <Link to='#' className="footer__quick-links-item-link footer__quick-links-item-link--link5">Link 5</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__copyright-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos ab dolorem.
                        </p>
                    </div>
                    <div className="footer__social">
                        <div className="footer__social-item footer__social-item--linkedin">
                            <img className="footer__social-img footer__social-img--facebook" src="https://img.icons8.com/dotty/80/000000/facebook-circled.png"/>
                        </div>
                        <div className="footer__social-item footer__social-item--linkedin">
                            <img className="footer__social-img footer__social-img--twitter" src="https://img.icons8.com/dotty/80/000000/facebook-circled.png"/>
                        </div>
                        <div className="footer__social-item footer__social-item--linkedin">
                            <img className="footer__social-img footer__social-img--instagram" src="https://img.icons8.com/dotty/80/000000/facebook-circled.png"/>
                        </div>
                        <div className="footer__social-item footer__social-item--linkedin">
                            <img className="footer__social-img footer__social-img--linkedin" src="https://img.icons8.com/dotty/80/000000/facebook-circled.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        )
    }
    
    export default Footer


    //     <div className="container-fluid bg-dark">
    //         <div className="container py-2">
    //             <div className="row justify-content-center">
    //                 <div className="col-md-6 order-md-2 d-flex flex-column align-items-center px-5 py-2">
    //                     <div>
    //                         <h4 className='text-light text-center'>More information</h4>
    //                     </div>
    //                     <div>
    //                         <p className="text-light text-center">This is a place for more information about In The Know Local to go.</p>
    //                     </div>
    //                 </div>
    //                 <div className="col-md-2 order-md-1">
    //                         <div className='list-group'>
    //                         <ul className="text-center list-group list-group-flush">
    //                             <Link to='/' className="list-group-item text-light bg-dark">Home</Link>
    //                             <Link to='/issues' className="list-group-item text-light bg-dark">Issues</Link>
    //                             <Link to='/about' className="list-group-item text-light bg-dark">About</Link>
    //                             <Link to='/contact' className="list-group-item text-light bg-dark">Contact</Link>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className='py-2 text-dark d-xs-none'>
    //                     <p>-</p>
    //                 </div>
    //                 <div className="col-md-2 order-md-3">
    //                     <div className='list-group'>
    //                         <ul className='text-center list-group list-group-flush'>
    //                             <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">Twitter</a>
    //                             <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">Facebook</a>
    //                             <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">LinkedIn</a>
    //                             <a href="https://instagram.com" target='_blank' rel="noopener noreferrer" className="text-light list-group-item bg-dark">Instagram</a>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     <div className="container bg-dark text-align-center pb-2">
    //         <p className='text-light font-weight-light text-center'>Copyright 2020 In The Know Local</p>
    //     </div>
    //     </div>