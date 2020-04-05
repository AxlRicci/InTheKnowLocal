import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../../store/actions/contactActions'
import ReCAPTCHA from 'react-google-recaptcha';

import './ContactForm.scss'

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            req: '',
            msg: '',
            captchaVerified: false
        }

        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.captchaChange = this.captchaChange.bind(this);
    }


    captchaChange(value) {
        this.setState({
            captchaVerified: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handlePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }
    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let contactInfo = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            req: this.state.req,
            msg: this.state.msg,
        }
        this.props.addContact(contactInfo);
        const form = document.getElementById('contact-form');
        form.reset();
        this.setState({
            name: '',
            phone: '',
            email: '',
            req: '',
            msg: ''
        })
        alert("Form Submitted!")
    }

    render() {
        return (
                <form className="contact__form" onSubmit={this.handleSubmit}>
                    <div className="contact__input-section contact__input--text">
                        <input name='name' onChange={this.handleName} value={this.state.name} type="text" className="contact__input contact__input--name" id="name" placeholder="Enter your full name *" required/>
                    </div>
                    <div className="contact__input-section contact__input--text">
                        <input name='phone' onChange={this.handlePhone} value={this.state.phone} type="text" className="contact__input contact__input--phone" id="phone" placeholder="Enter your phone number"/>
                    </div>
                    <div className="contact__input-section contact__input--email">
                        <input name='email' onChange={this.handleEmail} value={this.state.email} type="email" className="contact__input contact__input--email" id="email" placeholder="Enter your email address *" required/>
                    </div>
                    <div className="contact__input-section contact__input--select">
                        <select onChange={this.handleChange} className="contact__input contact__input--assistance-type" id="req" required>
                            <option defaultValue>What can we help you with? *</option>
                            <option value='info on being featured'>I want information on being featured</option>
                            <option value='info on a feature'>I have a question about a feature</option>
                            <option value='other info'>I have another question or need different information</option>
                        </select>
                    </div>
                    <div className="contact__input-section contact__input--text-area">
                        <textarea autoComplete="on" onChange={this.handleChange} className="contact__input-text-area contact__input-text-area--msg" id="msg" rows="3" placeholder='Enter your message'></textarea>
                    </div>
                    <ReCAPTCHA size='normal' sitekey='6LeDX-UUAAAAAMIYoGlvS3xxpfWpHqrT6MDz0RB4' onChange={this.captchaChange}/>
                    <button disabled={!this.state.captchaVerified} className="contact__input-submit" type="submit">Submit</button>
                </form>
        )
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contact) => dispatch(addContact(contact))
    }
}

export default connect(null, mapDispatchToProps)(ContactForm)