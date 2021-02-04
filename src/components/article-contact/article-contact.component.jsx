import React from 'react'
import './article-contact.styles.scss'

const ArticleContact = ({ selectedFeature }) => {

    // A list of all possible contact types.
    let contactTypes = ['email', 'twitter', 'instagram', 'linkedin', 'facebook', 'youtube', 'website']
    let contactInfo = []
    
    // Iterate through all possible contact types and if the contact type is not empty add it to the contact info array.
    contactTypes.forEach(type => {
        if (selectedFeature.hasOwnProperty(type) && selectedFeature[type]) {
            let contactObj = {
                'type': type,
                'address': selectedFeature[type]
            }
            contactInfo.push(contactObj)
        }
    })

    return (
        <section className="contact__container">
            <h3 className="contact__title">
                Connect with {selectedFeature.name.split(' ')[0]}:
            </h3>
            <ul className="contact__list">
                {
                    // Create list items for all non-empty contact info types.
                    contactInfo.map((contact) => (
                        <li className="contact__item" key={contact.address}>
                            <a href={`${contact.type === 'email' ? 'mailto:' : ''}${contact.address}`} className="contact__link" rel="noopener noreferrer" target="_blank">{contact.type}</a>
                        </li>
                    ))
                }
            </ul>
        </section> 
    )
}

export default ArticleContact
