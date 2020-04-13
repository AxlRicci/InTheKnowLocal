import React from 'react';

const ContactSection = (props) => {
    const { selectedFeature } = props;

    let contactTypes = ['twitter', 'instagram', 'linkedin', 'facebook', 'youtube', 'website'];
    let contactInfo = [];

    if (selectedFeature) {
        contactTypes.forEach(type => {
            if (selectedFeature.hasOwnProperty(type)) {
                let contactObj = {
                    'type': type,
                    'address': selectedFeature[type]
                }
                contactInfo.push(contactObj)
            }
        });
    }

    return (
        <>
        {selectedFeature && contactInfo
        ? <div className="issue__contact">
            <h3 className="issue__contact-title">
                Connect with {selectedFeature.name.split(' ')[0]}:
            </h3>
            <ul className="issue__contact-list">
                {contactInfo.map(value => {
                    return (
                        <li className={`issue__contact-list-item issue__contact-list-item--${value.type}`} key={value.address}>
                            <a href={value.address} className="issue__contact-list-link issue contact-list-link--item1" rel="noopener noreferrer" target="_blank">{value.type}</a>
                        </li>
                    )
                })}
            </ul>
        </div> 
        : null}
        </>
    )
}

export default ContactSection

