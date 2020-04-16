import React from 'react';
import './contactSection.scss'

const ContactSection = (props) => {
    const { selectedFeature } = props;

    let contactTypes = ['twitter', 'instagram', 'linkedin', 'facebook', 'youtube', 'website'];
    let contactInfo = [];
    
    let renderContent = null;

    if (selectedFeature) {
        // query feature for contact types and add them to contactInfo variable.
        contactTypes.forEach(type => {
            if (selectedFeature.hasOwnProperty(type)) {
                let contactObj = {
                    'type': type,
                    'address': selectedFeature[type]
                }
                contactInfo.push(contactObj)
            }
        });
        // define content that will be rendered using contactInfo variable.
        renderContent = (
            <div className="article__contact-section">
                <h3 className="article__contact-section-title">
                    Connect with {selectedFeature.name.split(' ')[0]}:
                </h3>
                <ul className="article__contact-section-list">
                    {contactInfo.map((value, index) => {
                        return (
                            <li className={`article__contact-section-list-item article__contact-list-item--${value.type}`} key={value.address}>
                                <a href={value.address} className={`article__contact-section-list-link issue article__contact-section-list-link--item${index}`} rel="noopener noreferrer" target="_blank">{value.type}</a>
                            </li>
                        )
                    })}
                </ul>
            </div> 
        )
    }

    return (
        <>
        {renderContent ? renderContent : null}
        </>
    )
}

export default ContactSection

