import React from 'react'
import ContactForm from './ContactForm'

const ContactPage = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-6">
                    <div className="container text-left">
                        <div className="col-12">
                            <h1>Contact Us!</h1>
                        </div>
                        <div className="col-12">
                            <h3 className='font-weight-light'>You have questions, we have answers!</h3>
                            <p className='font-weight-light'>Email us: <a className='text-danger font-weight-normal' href="mailto:sharon@influencefactor.ca">sharon@influencefactor.ca</a></p>
                            <p className='font-weight-light'>Tweet to us: <a className='text-danger font-weight-normal' href="https://twitter.com/influencemags" target='_blank' rel="noopener noreferrer">@influencemags</a></p>  
                            <p className='font-weight-light'>Or fill in your information below and we'll get back to you pronto!</p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <img className='img-fluid' src="https://cdn.thescoutguide.com/content/uploads/2018/05/12133303/the-scout-guide-contact-page.jpg" alt=""/>
                </div>
            </div>
        </div>
        )
}

export default ContactPage