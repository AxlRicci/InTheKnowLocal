import React, { useEffect, useState } from 'react'
import { getSiteContent } from '../../firebase/firebase.utils'

import Spinner from '../../components/spinner/spinner.component'

import './about-page.styles.scss'

// Renders the about page.

const AboutPage = () => {
    const [pageData, setPageData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {document.title = 'About | In The Know Local'})

    useEffect(()=> {
        // Fetching necessary about page content from Firestore.
        const getPageData = async () => {
            const fetchedContent = await getSiteContent()
            setPageData(fetchedContent)
            setLoading(false)
        }
        getPageData();
    },[])

    if (isLoading) return <Spinner />

    return (
        <main className="container">
            <article className="about">
                <h1 className="about__title about__title--main-title">{pageData.aboutTitle}</h1>
                <h2 className="about__title about__title--subtitle">{pageData.aboutSubtitle}</h2>
                <img src={pageData.aboutImage} alt={pageData.aboutImageAlt} className="about__image"/>
                <div className="about__description">
                    <p>{pageData.aboutMain}</p>
                </div>
            </article>
        </main>
	)
}
    
    export default AboutPage