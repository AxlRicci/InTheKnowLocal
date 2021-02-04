import React, {useState} from 'react'
import { firestore } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'

import ReCAPTCHA from 'react-google-recaptcha';

import './contact-form.styles.scss'

// The contact form component.
// Sends data to firestore and alerts user that the form was submitted.
// Submit button is disabled until the recaptcha is validated.

// The initial state of the form.
const initalData = {
    name: '',
    phone: '',
    email: '',
    req: '',
    msg: '',
    captchaVerified: false
}

const ContactForm = () => {
    const [formData, setFormData] = useState(initalData)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleCaptchaChange = (e) => {
        setFormData({...formData, captchaVerified: true})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await firestore.collection('contact').doc().set(formData)
            .then(() => {
                alert('Form Successfully submitted. Thanks!')
                setFormData(initalData)
            })
            .catch(() => {
                alert('Something went wrong. Please try again.')
            })
    } 

    return (
        <form id='contact-form' className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__input-section contact__input--text">
                <input name='name' onChange={handleChange} value={formData.name} type="text" className="contact__input contact__input--name" id="name" placeholder="Enter your full name *" required/>
            </div>
            <div className="contact__input-section contact__input--text">
                <input name='phone' onChange={handleChange} value={formData.phone} type="text" className="contact__input contact__input--phone" id="phone" placeholder="Enter your phone number"/>
            </div>
            <div className="contact__input-section contact__input--email">
                <input name='email' onChange={handleChange} value={formData.email} type="email" className="contact__input contact__input--email" id="email" placeholder="Enter your email address *" required/>
            </div>
            <div className="contact__input-section contact__input--select">
                <select onChange={handleChange} className="contact__input contact__input--assistance-type" id="req" required>
                    <option defaultValue>What can we help you with? *</option>
                    <option value='info on being featured'>I want information on being featured</option>
                    <option value='info on a feature'>I have a question about a feature</option>
                    <option value='other info'>I have another question or need different information</option>
                </select>
            </div>
            <div className="contact__input-section contact__input--text-area">
                <textarea autoComplete="on" onChange={handleChange} className="contact__input-text-area contact__input-text-area--msg" id="msg" rows="3" placeholder='Enter your message'></textarea>
            </div>
            <ReCAPTCHA size='normal' sitekey='6LeDX-UUAAAAAMIYoGlvS3xxpfWpHqrT6MDz0RB4' onChange={handleCaptchaChange}/>
            <CustomButton disabled={!formData.captchaVerified} className="contact__input-submit" type="submit">SUBMIT</CustomButton>
        </form>
    )
}

export default ContactForm