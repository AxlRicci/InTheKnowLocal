import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ContactForm from './ContactForm'

import './ContactPage.scss'

const ContactPage = () => {
    
    useEffect(() => {document.title = 'Contact | In The Know Local'});

    const reduxData = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null;
    });

    const siteContent = reduxData ? reduxData[0] : null;

    // Content to be rendered if data from redux/firebase available.

    let renderContent = null;

    if (siteContent) {
        renderContent = (
            <div className="container">
                <div className="contact">
                    <div className="contact__content">
                        <div className="contact__intro">
                            <div className="contact__title">
                                <h1 className="contact__title contact__title--main-title">Contact Us!</h1>
                                <h3 className="contact__title contact__title--subtitle">You have questions, we have answers!</h3>
                            </div>
                            <div className="contact__info">
                                <p className="contact__info contact__info--email">Email us: <a href="mailto:sharon@influencefactor.ca" className="contact__link contact__link--email">sharon@influencefactor.ca</a></p>
                                <p className="contact__info contact__info--twitter">Tweet to us: <a href="mailto:sharon@influencefactor.ca" className="contact__link contact__link--twitter">sharon@influencefactor.ca</a></p>
                                <p className="contact__info contact__info--desc">Or fill in your information below and we'll get back to you pronto!</p>
                            </div>
                        </div>
                        <div className="contact__form-section">
                            <ContactForm/>
                        </div>
                    </div>
                    <div className="contact__media">
                        <img src={siteContent.contactImage} alt={siteContent.contactImageAlt} className="contact__media contact__media--image"/>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
        {renderContent ? renderContent : null}
        </>
        )
    }
    
    export default ContactPage