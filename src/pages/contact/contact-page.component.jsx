import React, { useEffect, useState } from 'react'
import { getSiteContent } from '../../firebase/firebase.utils'

import ContactForm from '../../components/contact-form/contact-form.component'
import Spinner from '../../components/spinner/spinner.component'

import './contact-page.styles.scss'

// Renders the contact page and form component.

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
        <main className="container">
            <div className="contact-form__container">
                <section className="contact-form__content">
                    <h1 className="contact-form__title contact-form__title--main-title">Contact Us!</h1>
                    <h3 className="contact-form__title contact-form__title--subtitle">You have questions, we have answers!</h3>
                    <p className="contact-form__info">
                        <span>
                            Email us: &nbsp;
                            <a href="mailto:sharon@influencefactor.ca" className="contact-form__link contact-form__link--email">
                                sharon@influencefactor.ca
                            </a>
                        </span>
                        <span>
                            Tweet to us: &nbsp;
                            <a href="mailto:sharon@influencefactor.ca" className="contact-form__link contact-form__link--twitter">
                                @influencefactor
                            </a>
                        </span>
                        <span>
                            Or fill in your information below and we'll get back to you pronto!
                        </span>
                    </p>
                    <ContactForm/>
                </section>
                <img src={content.contactImage} alt={content.contactImageAlt} className="contact-form__image"/>
            </div>
        </main>
    )
}
    
    export default ContactPage