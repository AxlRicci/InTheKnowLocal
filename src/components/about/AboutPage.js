import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import './AboutPage.scss'


const AboutPage = (props) => {

    useEffect(() => {document.title = 'About | In The Know Local'})

    const data = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    const siteContent = data ? data[0] : null;

    return (
        <main className="container">
            <div className="about">
                <div className="about__title">
                    <h1 className="about__title about__title--main-title">What is</h1>
                    <h2 className="about__title about__title--subtitle">In The Know local</h2>
                </div>
                <div className="about__media">
                    <img src={siteContent ? siteContent.aboutImage : null} alt={siteContent ? siteContent.aboutImageAlt : null} className="about__media about__media--image"/>
                </div>
                <article className="about__description">
                    <p className="about__description about__content--text">
                        {siteContent ? siteContent.aboutMain : null}
                    </p>
                </article>
            </div>
        </main>
        )
    }
    
    export default AboutPage