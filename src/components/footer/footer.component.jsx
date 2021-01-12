import React, {useEffect, useState} from 'react'
import { getSiteContent } from '../../firebase/firebase.utils';

import './footer.styles.scss'

const Footer = () => {
    const [content, setContent] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const fetchedContent = await getSiteContent()
            setContent(fetchedContent)
            setLoading(false)
        }
        getData()
    },[])

    if (isLoading) return <p>Spinner...</p>

    return (
        <>
        <footer>
            <div className="holder">
                <div className="footer">
                    <div className="footer__about">
                        <h3 className="footer__about-title">About</h3>
                        <p className="footer__about-desc">
                            {content.footerAbout}
                        </p>
                    </div>
                    {/* <div className="footer__categories">
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
                    </div> */}
                    <div className="footer__copyright">
                        <p className="footer__copyright-text">
                            {content.footerCopyright}
                        </p>
                    </div>
                    <div className="footer__social">
                        <div className="footer__social-item footer__social-item--facebook">
                            <a href={content.footerFacebook} rel="noopener noreferrer">
                                <img className="footer__social-img footer__social-img--facebook" src="https://img.icons8.com/metro/52/FFFFFF/facebook-new--v2.png" alt='In The Know Local Facebook'/>                        
                            </a>
                        </div>
                        <div className="footer__social-item footer__social-item--linkedin">
                            <a href={content.footerLinkedin} rel="noopener noreferrer">
                                <img className="footer__social-img footer__social-img--linkedin" src="https://img.icons8.com/metro/52/FFFFFF/linkedin.png" alt='In The Know Local Linkedin'/>
                            </a>
                        </div>
                        <div className="footer__social-item footer__social-item--instagram">
                            <a href={content.footerInstagram} rel="noopener noreferrer">  
                                <img className="footer__social-img footer__social-img--instagram" src="https://img.icons8.com/metro/52/FFFFFF/instagram-new.png" alt='In The Know Local Instagram'/>
                            </a>
                        </div>
                        <div className="footer__social-item footer__social-item--twitter">
                            <a href={content.footerFacebook} target="_blank" rel="noopener noreferrer">
                                <img className="footer__social-img footer__social-img--twitter" src="https://img.icons8.com/metro/52/FFFFFF/twitter.png" alt='In The Know Local Twitter'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
        )
    }
    
export default Footer