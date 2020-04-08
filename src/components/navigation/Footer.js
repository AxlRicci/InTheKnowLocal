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