import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import './AboutPage.scss'


const AboutPage = (props) => {

    useEffect(() => {document.title = 'About | In The Know Local'})

    const reduxData = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    const siteContent = reduxData ? reduxData[0] : null;

    
    // Content to be rendered if data from redux/firebase available.
    
    let renderContent = null;
    
    if (siteContent) {
        renderContent = (
            <main className="container">
                <div className="about">
                    <div className="about__title">
                        <h1 className="about__title about__title--main-title">{siteContent.aboutTitle}</h1>
                        <h2 className="about__title about__title--subtitle">{siteContent.aboutSubtitle}</h2>
                    </div>
                    <div className="about__media">
                        <img src={siteContent.aboutImage} alt={siteContent.aboutImageAlt} className="about__media about__media--image"/>
                    </div>
                    <article className="about__description">
                        <p className="about__description about__content--text">
                            {siteContent.aboutMain}
                        </p>
                    </article>
                </div>
            </main>
        )
    }

    return (
        <>
        {renderContent ? renderContent : null}
        </>
        )
    }
    
    export default AboutPage