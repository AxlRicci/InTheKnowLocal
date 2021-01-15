import React, { useEffect, useState } from 'react'
import { getSiteContent } from '../../firebase/firebase.utils'

import ContactForm from '../../components/contact-form/contact-form.component'
import Spinner from '../../components/spinner/spinner.component'

import './contact-page.styles.scss'

const ContactPage = () => {
    const [content, setContent] = useState({})
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {document.title = 'Contact | In The Know Local'});

    useEffect(() => {
        const getContent = async () => {
            const fetchedContent = await getSiteContent();
            setContent(fetchedContent)
            setLoading(false)
        }
        getContent()
    },[])

    if (isLoading) return <Spinner />

    return (
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
                        <img src={content.contactImage} alt={content.contactImageAlt} className="contact__media contact__media--image"/>
                    </div>
                </div>
            </div>
    )
}
    
    export default ContactPage